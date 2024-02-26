import { useUserCredits } from "@chipp/nextjs-chipp/client";

export default function YourComponent() {
  const { userCredits, isLoading: balanceLoading } = useUserCredits();

  if (balanceLoading) {
    return <div>Loading...</div>;
  }

  // userCredits will be defined once balanceLoading is false
  return <div>Credits: {userCredits}</div>;
}