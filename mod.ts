addEventListener("fetch", (event) => {
  const searchParams = new URL(event.request.url).searchParams
  const targetText = searchParams.get('text') ?? 'メロスは激怒した。'
  const targetLang = searchParams.get('lang') ?? 'ja'
  const segments = new Intl.Segmenter(targetLang, {granularity: "word"}).segment(targetText);
  event.respondWith(
    new Response(JSON.stringify([...segments].map(seg=>seg.segment)), {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    }),
  );
});
