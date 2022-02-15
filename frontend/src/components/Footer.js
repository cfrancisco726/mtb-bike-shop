import logo from "../mtb_logo/mtb_logo@2x.png";

function Footer() {
  return (
    <div>
      <div className="footer">
        <img alt="" src={logo} className="d-inline-block align-top" />
        <p>20 Lakeview Drive, Ozone Park NY 11355</p>
        <p>MountainBikeExclusives@bikes.com</p>
        <p>555-856-9203</p>
      </div>
    </div>
  );
}

export default Footer;
