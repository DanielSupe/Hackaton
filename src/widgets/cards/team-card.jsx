import PropTypes from "prop-types";
import { Card, Avatar, Typography } from "@material-tailwind/react";

export function TeamCard({ img, name}) {
  return (
    <Card color="transparent" shadow={false} className="text-center">
      <Avatar
        src={img}
        alt={name}
        size="xxl"
        variant="rounded"
        className="h-full w-full shadow-lg shadow-gray-500/25 rounded-xl"
      />
      <Typography variant="h5" color="blue-gray" className="mt-6 mb-1 font-medium uppercase">
        {name}
      </Typography>
    </Card>
  );
}

TeamCard.defaultProps = {
  position: "",
  socials: null,
};

TeamCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

TeamCard.displayName = "/src/widgets/layout/team-card.jsx";

export default TeamCard;
