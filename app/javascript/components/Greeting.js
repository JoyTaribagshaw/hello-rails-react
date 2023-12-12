mport React from 'react'
import { useSelector } from 'react-redux';

const Greeting = () => {
  const { message, isLoading, error } = useSelector((store) => store.greetings);

  if (isLoading) {
    return (
      <div>Loading......</div>
    );
  }
  if (error) {
    return (
      <p className={styles.error}>
        Something went wrong!
        <br />
        { error }
      </p>
    );
  }
  if (message) {
    return (
      <div>{ message }</div>
    );
  }
};

export default Greeting;