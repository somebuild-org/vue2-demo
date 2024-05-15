import ghpages from "gh-pages";

ghpages.publish(
    ".",
    { dotfiles: true, branch: "published", src: ["package.json", "dist/**/*"] },
    function (err) {
        if (err) throw err;
        console.log("success");
    }
);
