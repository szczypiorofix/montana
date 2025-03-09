export function isMobileScreen(): boolean {
    return window.matchMedia('screen and (max-width: 768px)').matches;
    // return window.innerWidth < 768;
}
