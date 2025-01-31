const isProduction = process.env.NODE_ENV === 'production';
const basePath = isProduction ? '/codebypranav.github.io' : '';

export const getImagePath = (path: string) => `${basePath}${path}`; 