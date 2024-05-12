import { getStore } from "@netlify/blobs";
import { images } from "../../src/data";

export default async (req, context) => {
  const gallery = getStore("gallery");

  const likes = await gallery.get("likes");
  const imageId = new URL(req.url).searchParams.get("imageId");

  if (imageId === null) {
    return new Response("Missing imageId", { status: 400 });
  }

  
  
  if (!likes) {
    await gallery.set(
      "likes",
      images.reduce((acc, img) => {
        acc[img.imageId] = 0;
        return acc;
      }, {})
    );
  }

  likes[Number(req.query.imageId)] += 1;

  await gallery.set("likes", likes);

  return new Response(JSON.stringify(likes), {
    headers: {
      "content-type": "application/json",
    },
  });
};
