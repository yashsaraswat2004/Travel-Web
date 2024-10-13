import Navbar from "./Navbar";
const Homepage = () => {
  return (
    <div>
      <Navbar />
      <div
        className=" h-screen w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className=""></div>
      </div>
    </div>
  );
};

export default Homepage;
