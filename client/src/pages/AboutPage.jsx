import React from "react";
import About from "../components/About";
import StarCanvas from "../components/canvas/StarsCanvas";

const AboutPage = () => {
  return (
    <>
      <div className="relative z-0 bg-gradient-to-r from-sky-500 to-indigo-500">
          {/* <Container maxW={"container.lg"} padding="16" boxShadow={"lg"}>
            <Heading children="About Us" textAlign={["center", "left"]} />
            <Stack m="8" direction={["column", "row"]} alignItems="center">
              <Text>We are a team of 5 undergraduate students: CodeByte</Text>
              <Link to="/subscribe">
                <Button variant="outline" colorScheme="yellow">
                  Check our Plans
                </Button>
              </Link>
            </Stack>
          </Container> */}
          <div className="z-0">
          <StarCanvas />
        </div>
        <About/>
      </div>
    </>
  );
};

export default AboutPage;
