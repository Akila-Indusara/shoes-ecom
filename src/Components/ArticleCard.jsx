import {Link} from "react-router-dom";

function ArticleCard(article) {
    return (
        <div className="mx-auto shadow rounded-md p-3 m-3 mb-10 w-[300px] hover:scale-105 transition-transform hover:shadow-blue-500">
            <Link to={`/article/${article.title}`}>
                <img
                    className="h-[300px] w-full object-cover"
                    src={article.article.image}
                    alt={article.article.title}
                />
                <h2 className="text-2xl font-black py-2"> {article.article.title} </h2>
                <p className="text-justify"> &nbsp;&nbsp;&nbsp;
                    {article.article.content.length > 100
                        ? `${article.article.content.slice(0, 100)}...`
                        : article.article.content
                    }
                </p>
            </Link>
        </div>
    )
}

export default ArticleCard
