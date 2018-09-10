import Link from "next/link";
import React from "react";
import { utils } from "../../services";

class NoImage extends React.Component {
  render() {
    const { title, category, date, slug } = this.props.article;
    var d = new Date(date);

    const excerpt = this.props.withSummary
      ? utils.shortenExcerpt(
          this.props.article ? this.props.article.excerpt : null
        )
      : null;

    const asLink = this.props.magazine
      ? `/magazine/${d.getFullYear()}/${d.getMonth() +
          1}/${d.getDate()}/${slug}`
      : `/post/${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}/${slug}`;
    const hrefLink = this.props.magazine
      ? `/magazine?year=${d.getFullYear()}&month=${d.getMonth()}&day=${d.getDate()}&slug=${slug}`
      : `/post?year=${d.getFullYear()}&month=${d.getMonth()}&day=${d.getDate()}&slug=${slug}`;

    return (
      <div className="container">
        <Link as={asLink} href={hrefLink}>
          <a id="title">{title}</a>
        </Link>
        <div dangerouslySetInnerHTML={{ __html: excerpt }} id="text" />
        <p id="date">
          {category} | {utils.getDate(date)}
        </p>
        <style jsx>
          {`
            img {
              margin: auto;
              display: flex;
              justify-content: center;
              max-width: 99%;
            }
            #title {
              font-family: "Lato";
            }
            a {
              text-decoration: none;
              color: black;
              font-size: 1rem;
              font-weight: bold;
            }
            #text {
              font-size: 0.8rem;
              font-family: "Lato";
            }
            #date {
              font-family: "Lato";
              font-size: 0.85rem;
            }
          `}
        </style>
      </div>
    );
  }
}

export default NoImage;
