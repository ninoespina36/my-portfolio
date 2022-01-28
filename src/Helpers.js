export const _3XL = 1600;
export const _2XL = 1536;
export const _XL = 1280;
export const _LG = 1024;
export const _MD = 768;
export const _SM = 640;

export const isScreenGreater = width =>{
    return window.innerWidth > width;
}

export const isScreenLess = width =>{
    return window.innerWidth <= width;
}