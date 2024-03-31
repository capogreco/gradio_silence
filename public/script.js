document.body.style.margin = 0;
document.body.style.overflow = `hidden`;

let frame_count = 0;

function draw_frame() {
  const h = 24; // orange
  const c = `hsl(${h}, 50%, 50%)`;
  document.body.style.backgroundColor = c;

  frame_count++;

  requestAnimationFrame(draw_frame);
}

draw_frame();
