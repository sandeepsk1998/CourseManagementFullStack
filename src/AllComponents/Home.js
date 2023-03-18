import React  from "react";
import { Button,Card, Container } from "reactstrap";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    document.title = "Home";
},[])

  return (
    <div>
      <Card className="display-6">
      <div className="text-center"  >
        <div class="container">
          <h1>Learn Code with Sandeep</h1>
          <p>
            This is developed by Sandeep Kumar for learning purpose for the
            Front-end and Backend
          </p>
          <Container className="my-3">
            <Button color="primary">Start using </Button>
          </Container>
        </div>
        </div>
        </Card>
    </div>
  );
}

export default Home;
