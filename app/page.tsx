import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center">
      <hr />
      <h2>Home Page</h2>
      <ul>
        <li><Link href="/cart">--Cart--</Link></li>
        <li><Link href="/checkout">--Checkout--</Link></li>
        <li><Link href="/login">--Login--</Link></li>
        <li><Link href="/signup">--Register--</Link></li>
      </ul>
    </div>
  );
}
