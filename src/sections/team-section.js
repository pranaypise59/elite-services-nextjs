/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "components/section-header";
import TeamCard from "components/team-card";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

import Member1 from "assets/team/chetantemp.png";
import Member2 from "assets/team/pranay.png";
import Member3 from "assets/team/prajwal.png";

const data = [
	{
		id: 1,
		imgSrc: Member1,
		altText: "Chetan Banait",
		title: "Chetan Banait",
		designation: "CEO and Founder",
		socialProfile: [
		],
	},
	{
		id: 2,
		imgSrc: Member2,
		altText: "Pranay Pise",
		title: "Pranay Pise",
		designation: "Web Developer & SEO Expert",
		socialProfile: [
			{
				id: 3,
				name: "instagram",
				path: "https://www.instagram.com/pranay.pise_/",
				icon: <FaInstagram />,
			},
		],
	},
	{
		id: 3,
		imgSrc: Member3,
		altText: "Prajwal Vighne",
		title: "Prajwal Vighne",
		designation: "Marketing Lead",
		socialProfile: [
			{
				id: 3,
				name: "instagram",
				path: "https://www.instagram.com/drx._prajwal/",
				icon: <FaInstagram />,
			},
		],
	}
];

export default function TeamSection() {
	return (
		<section>
			<Container>
				<SectionHeader
					slogan="our team"
					title="Meet Our Expert Team"
				/>
				<Grid sx={styles.grid}>
					{data.map((item) => (
						<TeamCard
							key={item.id}
							src={item.imgSrc}
							altText={item.altText}
							title={item.title}
							designation={item.designation}
							social={item.socialProfile}
						/>
					))}
				</Grid>
			</Container>
		</section>
	);
}

const styles = {
	grid: {
		mt: [0, null, -6, null, -4],
		gridGap: ["35px 0px", null, 0, null, null, "30px 35px"],
		gridTemplateColumns: [
			"repeat(2,1fr)",
			null,
			"repeat(2,1fr)",
			null,
			"repeat(3,1fr)",
		],
	},
};
