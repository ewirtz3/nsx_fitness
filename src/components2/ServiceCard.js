import React from "react";
import { Card, CardMedia, CardContent, Box } from "@material-ui/core";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useFourThreeCardMediaStyles } from "@mui-treasury/styles/cardMedia/fourThree";
import { useN04TextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/n04";
import { useOverShadowStyles } from "@mui-treasury/styles/shadow/over";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 200,
    margin: "auto",
    borderRadius: 12,
    padding: 12,
  },
  media: {
    borderRadius: 6,
  },
}));

export default function ServiceCard({
  cardImgUrl,
  cardTitle,
  cardText,
  cardImgAlt,
}) {
  const styles = useStyles();
  const mediaStyles = useFourThreeCardMediaStyles();
  const textCardContentStyles = useN04TextInfoContentStyles();
  const shadowStyles = useOverShadowStyles({ inactive: true });

  return (
    <Box className="card">
      <Card classname={cx(styles.root, shadowStyles.root)}>
        <CardMedia
          className={cx(styles.media, mediaStyles.root)}
          image={cardImgUrl}
          alt={cardImgAlt}
        />
        <CardContent>
          <TextInfoContent
            classes={textCardContentStyles}
            heading={cardTitle}
            body={cardText}
          />
        </CardContent>
      </Card>
    </Box>
  );
}
