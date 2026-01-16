import Typed from "react-typed";

export default function Typing() {
  return (
    <h2 className="text-3xl sm:text-5xl font-bold text-white mt-4">
      <Typed
        strings={[
          "Frontend Developer",
          "MERN Stack Developer",
          "Building interactive web apps"
        ]}
        typeSpeed={50}
        backSpeed={40}
        loop
      />
    </h2>
  );
}
