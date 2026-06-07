// Test serverless function — proves the /api layer runs locally via `vercel dev`.
// Visit http://localhost:3000/api/hello after starting `vercel dev`.
export default function handler(req, res) {
  res.status(200).json({
    ok: true,
    message: 'Serverless function works locally! 🎉',
  });
}
