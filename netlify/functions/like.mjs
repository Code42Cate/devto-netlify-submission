import { getStore } from "@netlify/blobs";

export default async (req, _) => {

  if (req.method !== "POST") {
    await likeImage(new URL(req.url).searchParams.get("imageId"));
  }

  const likes = JSON.parse(await getStore("gallery").get("likes") || "{}");

  return new Response(JSON.stringify(likes), {
    headers: {
      "content-type": "application/json",
    },
  });
};

async function likeImage(imageId) {
  if (imageId === null) return;

  const gallery = getStore("gallery");
  let likes = JSON.parse(await gallery.get("likes") || "{}");

  if (!likes[Number(imageId)]) {
    likes[Number(imageId)] = 0;
  }

  likes[Number(imageId)] += 1;

  await gallery.set("likes", JSON.stringify(likes));
}