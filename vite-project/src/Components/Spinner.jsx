import { useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';

function SpinnersDemo() {
  const [loading, setLoading] = useState(false);

  const handleStart = () => setLoading(true);
  const handleStop = () => setLoading(false);

  return (
    <div>
      <div style={{ marginTop: "10px" }}>
        <Button
          variant="success"
          onClick={handleStart}
          disabled={loading}
          style={{ marginRight: "10px", minWidth: "110px" }}
        >
          {loading ? (
            <>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />{" "}
              Loading...
            </>
          ) : (
            "Continue"
          )}
        </Button>

        <Button variant="danger" onClick={handleStop}>
          Stop
        </Button>
      </div>
    </div>
  );
}

export default SpinnersDemo;
