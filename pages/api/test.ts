import type { NextRequest } from 'next/server';

const handler = (req: NextRequest) => {
  return new Response(`Hello, from ${req.url} I'm now an Edge API Route!`);
};

export default handler;

export const config = {
  runtime: 'experimental-edge',
};
