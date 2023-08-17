import React, { useEffect, useState }  from "react";

const ArticleDetail = () => {

  return (
    <div className="article-page">
      <div className="banner">
        <div className="fluid">
          <div className=" d-block text-center text-bg-dark text-white">
            <h1 className="pt-4 pb-3">conduit</h1>

            <div className="container article-meta d-flex align-items-center gap-3 pb-4">
              <a className="d-inline-block">
                {/* <img src={articles.author.image} alt="error" /> */}
                <img
                  className="rounded-circle"
                  src="https://api.realworld.io/images/demo-avatar.png"
                  alt="Anah Benešová"
                ></img>
              </a>

              <div className="info" style={{gap:'10px'}}>
                <a className="no-underline hover:underline hover:cursor-pointer" style={{color:'white'}}>
                  {/* {articles.author.username} */}Anah Benešová
                </a>
                <span className="feed-date d-block" style={{color:'#bbb', fontSize:'0.8rem'}}>
                  {/* {formatDate(articles.updatedAt)} */}Fri Dec 09 2022
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="container page" style={{ marginTop: "1.5rem" }}>
          <div className="row article-content">
            <div className="col-xs-12">
              <div>
                <p style={{ textAlign: "initial" }}>
                  Sunt excepturi ut dolore fuga.\nAutem eum maiores aut nihil
                  magnam corporis consectetur sit. Voluptate et quasi optio eos
                  et eveniet culpa et nobis.\nSint aut sint sequi possimus
                  reiciendis nisi. \nRerum et omnis et sit doloribus corporis
                  voluptas error.\nIusto molestiae tenetur necessitatibus
                  dolorem omnis. Libero sed ut architecto.\nEx itaque et modi
                  aut voluptatem alias quae.\nModi dolor cupiditate sit.
                  \nDelectus consectetur nobis aliquid deserunt sint ut et
                  voluptas.\nCorrupti in labore laborum quod. Ipsa laudantium
                  deserunt. Ut atque harum inventore natus facere sed
                  molestiae.\nQuia aliquid ut. \nAnimi sunt rem et sit ullam
                  dolorem ab consequatur modi. Cupiditate officia voluptatum.
                  \nTenetur facere eum distinctio animi qui laboriosam.\nQuod
                  sed voluptatem et cumque est eos. \nSint id provident suscipit
                  harum odio et. Et fuga repellendus magnam dignissimos eius
                  aspernatur rerum. Quo perferendis nesciunt.\nDolore dolorem
                  porro omnis voluptatibus consequuntur et expedita suscipit et.
                  \nTempora facere ipsa.\nDolore accusamus soluta officiis
                  eligendi.\nEum quaerat neque eum beatae odio. Ad voluptate
                  vel.\nAut aut dolor. Cupiditate officia voluptatum.\nTenetur
                  facere eum distinctio animi qui laboriosam. \nQuod sed
                  voluptatem et cumque est eos.\nSint id provident suscipit
                  harum odio et.
                </p>
              </div>
            </div>

            <div className="text-start">
              <ul className="tag-list d-inline-block ">
                <li
                  style={{
                    border: "1px solid #ddd",
                    color: "rgb(193, 190, 190)",
                    fontSize: "0.8rem",
                    borderRadius: "10rem",
                  }}
                  className="tag-default tag-pill tag-outline d-inline-block pt-1 pb-1 pl-2 pr-2 m-1"
                >
                  voluptate
                </li>
                <li
                  style={{
                    border: "1px solid #ddd",
                    color: "rgb(193, 190, 190)",
                    fontSize: "0.8rem",
                    borderRadius: "10rem",
                  }}
                  className="tag-default tag-pill tag-outline d-inline-block pt-1 pb-1 pl-2 pr-2 m-1"
                >
                  rerum
                </li>
                <li
                  style={{
                    border: "1px solid #ddd",
                    color: "rgb(193, 190, 190)",
                    fontSize: "0.8rem",
                    borderRadius: "10rem",
                  }}
                  className="tag-default tag-pill tag-outline d-inline-block pt-1 pb-1 pl-2 pr-2 m-1"
                >
                  ducimus
                </li>
                <li
                  style={{
                    border: "1px solid #ddd",
                    color: "rgb(193, 190, 190)",
                    fontSize: "0.8rem",
                    borderRadius: "10rem",
                  }}
                  className="tag-default tag-pill tag-outline d-inline-block pt-1 pb-1 pl-2 pr-2 m-1"
                >
                  hic
                </li>
              </ul>
            </div>

            <div className="mt-3" style={{borderBottom:'1px solid lightGray'}}></div>

          </div>
        </div>

      </div>
      <div className="row">
        <div className="col-xs-12 col-md-8 offset-md-2">
          <div>
            <form
              method="POST"
              action="?/createComment"
              className="card comment-form m-5"
            >
              <div className="card-block ">
                <textarea
                  className="form-control p-4"
                  name="comment"
                  placeholder="Write a comment..."
                  rows="3"
                ></textarea>
              </div>

              <div className="card-footer d-flex justify-content-between align-items-center p-3" >
               
                <img style={{width:'2rem', float:'float-start', borderRadius:'50%'}}
                  src="https://api.realworld.io/images/smiley-cyrus.jpeg"
                  className="comment-author-img d-inline-block"
                  alt="HastyAlvin"
                ></img>
                <button className="btn btn-sm btn-success " type="submit">
                  Post Comment
                </button>
              </div>
            </form>
          </div>
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default ArticleDetail;
