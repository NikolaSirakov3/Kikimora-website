// Utility to load a .lottie file as animationData for lottie-react
export async function loadLottieAnimation(path: string) {
  const response = await fetch(path);
  if (!response.ok) throw new Error('Failed to load animation');
  return await response.json();
}
