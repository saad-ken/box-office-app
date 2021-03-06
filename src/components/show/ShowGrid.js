import React, { useCallback } from "react";
import ShowCard from "./ShowCard";
import IMGAE_NOT_FOUND from "../../assets/not_found.png";
import { FlexGrid } from "../styled";
import { useShows } from "../../misc/custom-hooks";

const ShowGrid = ({ data }) => {
  const [starredShows, dispatchStarred] = useShows();
  return (
    <FlexGrid>
      {data.map(({ show }) => {
        const isStarred = starredShows.includes(show.id);

        // eslint-disable-next-line react-hooks/rules-of-hooks
        const onStarClick = useCallback(() => {
          if (isStarred) {
            dispatchStarred({ type: "REMOVE", showId: show.id });
          } else {
            dispatchStarred({ type: "ADD", showId: show.id });
          }
        }, [isStarred, show.id]);

        return (
          <ShowCard
            key={show.id}
            id={show.id}
            name={show.name}
            image={show.image ? show.image.medium : IMGAE_NOT_FOUND}
            summary={show.summary}
            isStarred={isStarred}
            onStarClick={onStarClick}
          />
        );
      })}
    </FlexGrid>
  );
};

export default ShowGrid;
