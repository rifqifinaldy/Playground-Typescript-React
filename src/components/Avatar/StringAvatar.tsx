import { stringToColor } from "../../utilities/tools/generate.colour";


const StringAvatar = (name: string) => {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
};

export default StringAvatar;
