(window.webpackJsonp=window.webpackJsonp||[]).push([[1159],{1507:function(e,t,a){"use strict";a.r(t);var r=a(19),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"working-with-remotes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#working-with-remotes"}},[e._v("#")]),e._v(" Working with Remotes")]),e._v(" "),a("h2",{attrs:{id:"deleting-a-remote-branch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deleting-a-remote-branch"}},[e._v("#")]),e._v(" Deleting a Remote Branch")]),e._v(" "),a("p",[e._v("To delete a remote branch in Git:")]),e._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[e._v("git push [remote-name] --delete [branch-name]\n\n")])])]),a("p",[e._v("or")]),e._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[e._v("git push [remote-name] :[branch-name]\n\n")])])]),a("h2",{attrs:{id:"changing-git-remote-url"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changing-git-remote-url"}},[e._v("#")]),e._v(" Changing Git Remote URL")]),e._v(" "),a("p",[e._v("Check existing remote")]),e._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[e._v("git remote -v \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# origin https://github.com/username/repo.git (fetch)")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# origin https://github.com/usernam/repo.git (push)")]),e._v("\n\n")])])]),a("p",[e._v("Changing repository URL")]),e._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[e._v("git remote set-url origin https://github.com/username/repo2.git\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Change the 'origin' remote's URL")]),e._v("\n\n")])])]),a("p",[e._v("Verify new remote URL")]),e._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[e._v("git remote -v\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# origin  https://github.com/username/repo2.git (fetch)")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# origin  https://github.com/username/repo2.git (push)")]),e._v("\n\n")])])]),a("h2",{attrs:{id:"updating-from-upstream-repository"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updating-from-upstream-repository"}},[e._v("#")]),e._v(" Updating from Upstream Repository")]),e._v(" "),a("p",[e._v('Assuming you set the upstream (as in the "setting an upstream repository")')]),e._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[e._v("git fetch remote-name\ngit merge remote-name/branch-name\n\n")])])]),a("p",[e._v("The "),a("code",[e._v("pull")]),e._v(" command combines a "),a("code",[e._v("fetch")]),e._v(" and a "),a("code",[e._v("merge")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[e._v("git pull\n\n")])])]),a("p",[e._v("The "),a("code",[e._v("pull")]),e._v(" with "),a("code",[e._v("--rebase")]),e._v(" flag command combines a "),a("code",[e._v("fetch")]),e._v(" and a "),a("code",[e._v("rebase")]),e._v(" instead of "),a("code",[e._v("merge")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[e._v("git pull --rebase remote-name branch-name\n\n")])])]),a("h2",{attrs:{id:"ls-remote"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ls-remote"}},[e._v("#")]),e._v(" ls-remote")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://git-scm.com/docs/git-ls-remote",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("git ls-remote")]),a("OutboundLink")],1),e._v(" is one unique command allowing you to query a remote repo "),a("strong",[e._v("without having to clone/fetch it first")]),e._v(".")]),e._v(" "),a("p",[e._v("It will list refs/heads and refs/tags of said remote repo.")]),e._v(" "),a("p",[e._v("You will see sometimes "),a("code",[e._v("refs/tags/v0.1.6")]),e._v(" "),a("strong",[e._v("and")]),e._v(" "),a("code",[e._v("refs/tags/v0.1.6^{}")]),e._v(": the "),a("code",[e._v("^{}")]),e._v(" to list the dereferenced annotated tag (ie the commit that tag is pointing to)")]),e._v(" "),a("p",[e._v("Since git 2.8 (March 2016), you can avoid that double entry for a tag, and list directly those dereferenced tags with:")]),e._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[e._v("git ls-remote --ref\n\n")])])]),a("p",[e._v('It can also help resolve the actual url used by a remote repo when you have "'),a("code",[e._v("url.<base>.insteadOf")]),e._v('" config setting.'),a("br"),e._v("\nIf "),a("code",[e._v("git remote --get-url <aremotename>")]),e._v(" returns "),a("a",{attrs:{href:"https://server.com/user/repo",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://server.com/user/repo"),a("OutboundLink")],1),e._v(", and you have set "),a("code",[e._v("git config url.ssh://git@server.com:.insteadOf https://server.com/")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[e._v("git ls-remote --get-url <aremotename>\nssh://git@server.com:user/repo\n\n")])])]),a("h2",{attrs:{id:"removing-local-copies-of-deleted-remote-branches"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#removing-local-copies-of-deleted-remote-branches"}},[e._v("#")]),e._v(" Removing Local Copies of Deleted Remote Branches")]),e._v(" "),a("p",[e._v("If a remote branch has been deleted, your local repository has to be told to prune the reference to it.")]),e._v(" "),a("p",[e._v("To prune deleted branches from a specific remote:")]),e._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[e._v("git fetch [remote-name] --prune\n\n")])])]),a("p",[e._v("To prune deleted branches from "),a("strong",[e._v("all")]),e._v(" remotes:")]),e._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[e._v("git fetch --all --prune\n\n")])])]),a("h2",{attrs:{id:"list-existing-remotes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#list-existing-remotes"}},[e._v("#")]),e._v(" List Existing Remotes")]),e._v(" "),a("p",[e._v("List all the existing remotes associated with this repository:")]),e._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[e._v("git remote\n\n")])])]),a("p",[e._v("List all the existing remotes associated with this repository in detail including the "),a("code",[e._v("fetch")]),e._v(" and "),a("code",[e._v("push")]),e._v(" URLs:")]),e._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[e._v("git remote --verbose\n\n")])])]),a("p",[e._v("or simply")]),e._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[e._v("git remote -v\n\n")])])]),a("h2",{attrs:{id:"adding-a-new-remote-repository"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-a-new-remote-repository"}},[e._v("#")]),e._v(" Adding a New Remote Repository")]),e._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[e._v("git remote add upstream git-repository-url\n\n")])])]),a("p",[e._v("Adds remote git repository represented by "),a("code",[e._v("git-repository-url")]),e._v(" as new remote named "),a("code",[e._v("upstream")]),e._v(" to the git repository")]),e._v(" "),a("h2",{attrs:{id:"getting-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[e._v("#")]),e._v(" Getting Started")]),e._v(" "),a("h3",{attrs:{id:"syntax-for-pushing-to-a-remote-branch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax-for-pushing-to-a-remote-branch"}},[e._v("#")]),e._v(" Syntax for pushing to a remote branch")]),e._v(" "),a("p",[a("code",[e._v("git push <remote_name> <branch_name>")])]),e._v(" "),a("h3",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),a("p",[a("code",[e._v("git push origin master")])]),e._v(" "),a("h2",{attrs:{id:"set-upstream-on-a-new-branch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-upstream-on-a-new-branch"}},[e._v("#")]),e._v(" Set Upstream on a New Branch")]),e._v(" "),a("p",[e._v("You can create a new branch and switch to it using")]),e._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[e._v("git checkout -b AP-57\n\n")])])]),a("p",[e._v("After you use git checkout to create a new branch, you will need to set that upstream origin to push to using")]),e._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[e._v("git push --set-upstream origin AP-57\n\n")])])]),a("p",[e._v("After that, you can use git push while you are on that branch.")]),e._v(" "),a("h2",{attrs:{id:"show-information-about-a-specific-remote"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#show-information-about-a-specific-remote"}},[e._v("#")]),e._v(" Show information about a Specific Remote")]),e._v(" "),a("p",[e._v("Output some information about a known remote: "),a("code",[e._v("origin")])]),e._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[e._v("git remote show origin\n\n")])])]),a("p",[e._v("Print just the remote's URL:")]),e._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[e._v("git config --get remote.origin.url\n\n")])])]),a("p",[e._v("With 2.7+, it is also possible to do, which is arguably better than the above one that uses the "),a("code",[e._v("config")]),e._v(" command.")]),e._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[e._v("git remote get-url origin\n\n")])])]),a("h2",{attrs:{id:"changing-a-remote-repository"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changing-a-remote-repository"}},[e._v("#")]),e._v(" Changing a Remote Repository")]),e._v(" "),a("p",[e._v("To change the URL of the repository you want your remote to point to, you can use the "),a("code",[e._v("set-url")]),e._v(" option, like so:")]),e._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[e._v("git remote set-url <remote_name> <remote_repository_url>\n\n")])])]),a("p",[e._v("Example:")]),e._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[e._v("git remote set-url heroku https://git.heroku.com/fictional-remote-repository.git\n\n")])])]),a("h2",{attrs:{id:"renaming-a-remote"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#renaming-a-remote"}},[e._v("#")]),e._v(" Renaming a Remote")]),e._v(" "),a("p",[e._v("To rename remote, use command "),a("code",[e._v("git remote rename")])]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("git remote rename")]),e._v(" command takes two arguments:")]),e._v(" "),a("ul",[a("li",[e._v("An existing remote name, for example : "),a("strong",[e._v("origin")])]),e._v(" "),a("li",[e._v("A new name for the remote, for example : "),a("strong",[e._v("destination")])])]),e._v(" "),a("p",[e._v("Get existing remote name")]),e._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[e._v("git remote\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# origin")]),e._v("\n\n")])])]),a("p",[e._v("Check existing remote with URL")]),e._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[e._v("git remote -v \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# origin https://github.com/username/repo.git (fetch)")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# origin https://github.com/usernam/repo.git (push)")]),e._v("\n\n")])])]),a("p",[e._v("Rename remote")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("\ngit remote rename origin destination\n # Change remote name from 'origin' to 'destination'\n\n")])])]),a("p",[e._v("Verify new name")]),e._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[e._v("git remote -v \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# destination https://github.com/username/repo.git (fetch)")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# destination https://github.com/usernam/repo.git (push)")]),e._v("\n\n")])])]),a("p",[a("strong",[e._v("=== Posible Errors ===")])]),e._v(" "),a("li",[e._v("\nCould not rename config section 'remote.[old name]' to 'remote.[new name]'\nThis error means that the remote you tried the old remote name (**origin**) doesn't exist.\n")]),e._v(" "),a("li",[e._v("\nRemote [new name] already exists.\nError message is self explanatory.\n")]),e._v(" "),a("h2",{attrs:{id:"set-the-url-for-a-specific-remote"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-the-url-for-a-specific-remote"}},[e._v("#")]),e._v(" Set the URL for a Specific Remote")]),e._v(" "),a("p",[e._v("You can change the url of an existing remote by the command")]),e._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[e._v("git remote set-url remote-name url \n\n")])])]),a("h2",{attrs:{id:"get-the-url-for-a-specific-remote"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-the-url-for-a-specific-remote"}},[e._v("#")]),e._v(" Get the URL for a Specific Remote")]),e._v(" "),a("p",[e._v("You can obtain the url for an existing remote by using the command")]),e._v(" "),a("p",[a("code",[e._v("git remote get-url <name>")])]),e._v(" "),a("p",[e._v("By default, this will be")]),e._v(" "),a("p",[a("code",[e._v("git remote get-url origin")])]),e._v(" "),a("h4",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[e._v("#")]),e._v(" Syntax")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("git remote [-v | --verbose]")])]),e._v(" "),a("li",[a("code",[e._v("git remote add [-t <branch>] [-m <master>] [-f] [--[no-]tags] [--mirror=<fetch|push>] <name> <url>")])]),e._v(" "),a("li",[a("code",[e._v("git remote rename <old> <new>")])]),e._v(" "),a("li",[a("code",[e._v("git remote remove <name>")])]),e._v(" "),a("li",[a("code",[e._v("git remote set-head <name> (-a | --auto | -d | --delete | <branch>)")])]),e._v(" "),a("li",[a("code",[e._v("git remote set-branches [--add] <name> <branch>…​")])]),e._v(" "),a("li",[a("code",[e._v("git remote get-url [--push] [--all] <name>")])]),e._v(" "),a("li",[a("code",[e._v("git remote set-url [--push] <name> <newurl> [<oldurl>]")])]),e._v(" "),a("li",[a("code",[e._v("git remote set-url --add [--push] <name> <newurl>")])]),e._v(" "),a("li",[a("code",[e._v("git remote set-url --delete [--push] <name> <url>")])]),e._v(" "),a("li",[a("code",[e._v("git remote [-v | --verbose] show [-n] <name>…​")])]),e._v(" "),a("li",[a("code",[e._v("git remote prune [-n | --dry-run] <name>…​")])]),e._v(" "),a("li",[a("code",[e._v("git remote [-v | --verbose] update [-p | --prune] [(<group> | <remote>)…​]")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);