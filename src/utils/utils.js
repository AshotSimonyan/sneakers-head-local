export const animatedTitle = (text) => {
  return text.split('').map((letter, index) => {
    if (letter === ' ') {
      return (
        <span key={index} className='space'>
          {letter}
        </span>
      );
    }
    return <span key={index}>{letter}</span>;
  });
};

export function navigateTo(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }

  const { href } = e.currentTarget;
  requestAnimationFrame(() => {
    window.scroll({
      top:
        document.querySelector(href.slice(href.lastIndexOf('/') + 1))
          .offsetTop - 80,
      behavior: 'smooth',
    });
  });
}
