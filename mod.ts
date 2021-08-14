addEventListener("fetch", (event) => {
  const segmenter = new Intl.Segmenter("ja", {granularity: "word"});
  const segments = segmenter.segment('メロスは激怒した。');
  event.respondWith(
    new Response(JSON.stringify([...segments]), {
      status: 200,
      headers: {
        "content-type": "text/plain",
      },
    }),
  );
});
