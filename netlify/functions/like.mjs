import { getStore } from "@netlify/blobs";
import { images } from "../../src/data";

export default async (req, context) => {
  const gallery = getStore("gallery");

  const likes = await gallery.get("likes");

  /*
  
  if (!likes) {
    await gallery.set(
      "likes",
      images.reduce((acc, img) => {
        acc[img.imageId] = 0;
        return acc;
      }, {})
    );
  }

  likes[req.query.imageId] += 1;

  await gallery.set("likes", likes);
*/
  return new Response(JSON.stringify(req), {
    headers: {
      "content-type": "application/json",
    },
  });
};
