import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "service/API";
import Notiflix from "notiflix";
import { ReviewsImg, ReviewsLi, ReviewsText, ReviewsUl, Title3 } from "./Rewiews.styled";
import NoImage from 'D:/GO IT/goit-react-hw-05-movies/src/noImag.png';

export default function Reviews() {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  
  useEffect(() => {
    getReviews(id)
      .then(({ data }) => setReviews(data.results))
      .catch(error =>
        Notiflix.Notify.warning(
          'Sorry, something went wrong.... Please try again.'
        )
      );
  }, [id]);

  //if (!reviews) {
   // return null;
  //}
    return (
      <>
        {reviews.length > 0 ? (
        <ReviewsUl>
          {reviews.map(({ id, author, author_details, content }) => (
            <ReviewsLi key={id}>
              <ReviewsImg
                src={
                  author_details.avatar_path
                    ? `https://image.tmdb.org/t/p/w500/${author_details.avatar_path}`
                    : NoImage
                }
                alt={author}
                width={'100px'}
              />
              <Title3>{author} </Title3>
              <ReviewsText>{content} </ReviewsText>
            </ReviewsLi>
          ))}
        </ReviewsUl>
      ) : (
        <ReviewsText>We do not have any reviews for this movie.</ReviewsText>
      )}
      </>
    );
  };

  