import Link from "next/link";
import { Arrow, Footer, Header } from "./components/site-shell";
export default function NotFound() { return <><Header /><main><section className="page-intro shell"><p className="kicker"><span>404</span></p><h1>This path has no useful signal.</h1><p className="page-intro-copy">The page may have moved. Return to the portfolio and continue exploring the work.</p><div style={{marginTop:40}}><Link className="button button-primary" href="/">Return home <Arrow /></Link></div></section></main><Footer /></>; }
