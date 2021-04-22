import Skeleton from "react-loading-skeleton";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2%;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: "50px";
  position: relative;
`;

const ReactLoadingSkeleton = () => (
  <Container>
    <div>
      <div>
        <Skeleton height={300} width={600} />
      </div>
    </div>
    <div style={{ marginTop: "30px" }}>
      <Skeleton height={60} width={600} />
    </div>

    <div
      style={{
        marginTop: "30px",
        width: "500px",
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
      }}
    >
      <Skeleton height={40} width={40} count={9} />
    </div>

    <div style={{ marginTop: "30px" }}>
      <Skeleton height={150} width={600} />
    </div>

    <div style={{ marginTop: "30px" }}>
      <Skeleton height={150} width={600} />
    </div>
    <div style={{ marginTop: "30px" }}>
      <Skeleton height={150} width={600} />
    </div>
    <div style={{ marginTop: "30px" }}>
      <Skeleton height={150} width={600} />
    </div>
    <div style={{ marginTop: "30px" }}>
      <Skeleton height={150} width={600} />
    </div>
  </Container>
);

export default ReactLoadingSkeleton;
