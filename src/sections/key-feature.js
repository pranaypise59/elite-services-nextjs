/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "../components/section-header";
import FeatureCardColumn from "components/feature-card-column.js";
import Performance from "assets/key-feature/performance.svg";
import Partnership from "assets/key-feature/partnership.svg";
import Subscription from "assets/key-feature/subscription.svg";
import Support from "assets/key-feature/support.svg";

const data = [
	{
	  id: 1,
	  imgSrc: Performance,
	  altText: "Custom Card Designs",
	  title: "Custom Card Designs",
	  text:
		"Stand out with unique and personalized card designs tailored to your brand. Our expert designers will create stunning visuals that leave a lasting impression.",
	},
	{
	  id: 2,
	  imgSrc: Subscription,
	  altText: "Premium Materials",
	  title: "Premium Materials",
	  text:
		"Experience the finest quality with our premium materials. Choose from glossy laminated cards with 250 gsm paper or 300 gsm paper for a luxurious touch.",
	},
	{
	  id: 3,
	  imgSrc: Partnership,
	  altText: "Lamination Options",
	  title: "Lamination Options",
	  text:
		"Elevate your cards with various lamination choices. Opt for matte lamination on 350 gsm paper or spot lamination on 400 gsm paper for a distinctive look.",
	},
	{
	  id: 4,
	  imgSrc: Support,
	  altText: "Affordable Pricing",
	  title: "Affordable Pricing",
	  text:
		"Get the best value for your money with our competitive prices. Our cards are of awesome quality, and we offer the cheapest rates in the market.",
	},
  ];
  

export default function KeyFeature() {
	return (
		<section sx={{ variant: "section.keyFeature" }} id="feature">
			<Container>
				<SectionHeader
					slogan="OUR PRODUCT'S FEATURES"
					title="Explore the functionality of our product"
				/>
				<Grid sx={styles.grid}>
					{data.map((item) => (
						<FeatureCardColumn
							key={item.id}
							src={item.imgSrc}
							alt={item.altText}
							title={item.title}
							text={item.text}
						/>
					))}
				</Grid>
			</Container>
		</section>
	);
}

const styles = {
	grid: {
		width: ["100%", "80%", "100%"],
		mx: "auto",
		gridGap: [
			"35px 0",
			null,
			"40px 40px",
			"50px 60px",
			"30px",
			"50px 40px",
			"55px 90px",
		],
		gridTemplateColumns: [
			"repeat(1,1fr)",
			null,
			"repeat(2,1fr)",
			null,
			"repeat(4,1fr)",
		],
	},
};
