const ComputerLights = () => {
  return (
    <>
      <ambientLight intensity={1} color="#fff" />
      <directionalLight position={[5, 5, 5]} intensity={5} />
      {/* <spotLight position={[2, 5, 6]} intensity={100} /> */}
    </>
  );
};

export default ComputerLights;
