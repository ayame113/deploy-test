addEventListener("fetch", (event) => {
  const targetText = new URL(event.request.url).searchParams.get('text') ?? 'メロスは激怒した。'
  const segmenter = new Intl.Segmenter("ja", {granularity: "word"});
  const segments = segmenter.segment(targetText);
  event.respondWith(
    new Response(JSON.stringify([...segments].map(seg=>seg.segment)), {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    }),
  );
});
