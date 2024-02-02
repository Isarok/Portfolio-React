export const facein = (direction, delay) => {
    return {
        hidden: {
            y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
            opacity: 0,
            x: direction === 'right' ? 80 : direction === 'left' ? -80 : 0,
        },
        show: {
            y: 0,
            opacity: 1,
            x: 0,
            transition: {
                type: 'tween',
                duration: 1.2,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75],
            },
        }
    }
}