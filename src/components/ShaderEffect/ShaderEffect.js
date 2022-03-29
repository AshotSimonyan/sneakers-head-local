import React from 'react';

function ShaderEffect() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);
  return mounted && <canvas id='canvas1' />;
}

export default ShaderEffect;
