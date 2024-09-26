import { Card } from "@mui/material";

export default function Home(props: Object) {
  return (
    <Card className="options bg-grey ">
      <div>
        <h2>Temporary Service Unavailable for Maintenance</h2>
        <p>
          As per the order of DDIA, Student Search portal will be unavailable
          until further notice.
          <br />
          We are working with the administration to resolve the issue and will
          be back soon with the necessary updates. Thank you for your
          understanding.
        </p>
      </div>
    </Card>
  );
}
