import { getStore } from "@netlify/blobs";
import { images } from "../../src/data";

export default async (req, context) => {
  const gallery = getStore("gallery");

  let likes = JSON.parse(await gallery.get("likes"));
  const imageId = new URL(req.url).searchParams.get("imageId");

  if (imageId === null) {
    return new Response("Missing imageId", { status: 400 });
  }

  if (!likes) {
    likes = images.reduce((acc, img) => {
      acc[img.imageId] = 0;
      return acc;
    }, {});
  }

  likes[Number(imageId)] += 1;

  await gallery.set("likes", JSON.stringify(likes));

  return new Response(JSON.stringify(likes), {
    headers: {
      "content-type": "application/json",
    },
  });
};
