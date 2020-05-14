(window.webpackJsonp=window.webpackJsonp||[]).push([[1151],{1494:function(t,s,a){"use strict";a.r(s);var e=a(19),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"stashing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stashing"}},[t._v("#")]),t._v(" Stashing")]),t._v(" "),a("h2",{attrs:{id:"create-stash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-stash"}},[t._v("#")]),t._v(" Create stash")]),t._v(" "),a("p",[t._v("Save the current state of working directory and the index (also known as the staging area) in a stack of stashes.")]),t._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[t._v("git stash\n\n")])])]),a("p",[t._v("To include all untracked files in the stash use the "),a("code",[t._v("--include-untracked")]),t._v(" or "),a("code",[t._v("-u")]),t._v(" flags.")]),t._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[t._v("git stash --include-untracked\n\n")])])]),a("p",[t._v("To include a message with your stash to make it more easily identifiable later")]),t._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[t._v("git stash save "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<whatever message>"')]),t._v("\n\n")])])]),a("p",[t._v("To leave the staging area in current state after stash use the "),a("code",[t._v("--keep-index")]),t._v(" or "),a("code",[t._v("-k")]),t._v(" flags.")]),t._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[t._v("git stash --keep-index\n\n")])])]),a("h2",{attrs:{id:"apply-and-remove-stash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apply-and-remove-stash"}},[t._v("#")]),t._v(" Apply and remove stash")]),t._v(" "),a("p",[t._v("To apply the last stash and remove it from the stack - type:")]),t._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[t._v("git stash pop\n\n")])])]),a("p",[t._v("To apply specific stash and remove it from the stack - type:")]),t._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[t._v("git stash pop stash@{n}\n\n")])])]),a("h2",{attrs:{id:"apply-stash-without-removing-it"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apply-stash-without-removing-it"}},[t._v("#")]),t._v(" Apply stash without removing it")]),t._v(" "),a("p",[t._v("Applies the last stash without removing it from the stack")]),t._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[t._v("git stash apply\n\n")])])]),a("p",[t._v("Or a specific stash")]),t._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[t._v("git stash apply stash@{n}\n\n")])])]),a("h2",{attrs:{id:"show-stash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#show-stash"}},[t._v("#")]),t._v(" Show stash")]),t._v(" "),a("p",[t._v("Shows the changes saved in the last stash")]),t._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[t._v("git stash show\n\n")])])]),a("p",[t._v("Or a specific stash")]),t._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[t._v("git stash show stash@{n}\n\n")])])]),a("p",[t._v("To show content of the changes saved for the specific stash")]),t._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[t._v("git stash show -p stash@{n}\n\n")])])]),a("h2",{attrs:{id:"what-is-stashing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-stashing"}},[t._v("#")]),t._v(" What is Stashing?")]),t._v(" "),a("p",[t._v("When working on a project, you might be half-way through a feature branch change when a bug is raised against master. You're not ready to commit your code, but you also don't want to lose your changes. This is where "),a("code",[t._v("git stash")]),t._v(" comes in handy.")]),t._v(" "),a("p",[t._v("Run "),a("code",[t._v("git status")]),t._v(" on a branch to show your uncommitted changes:")]),t._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[a("span",{pre:!0,attrs:{class:"token command"}},[t._v("(master) $ git status")]),t._v("\nOn branch master\nYour branch is up-to-date with "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'origin/master'")]),t._v(".\nChanges not staged for commit:\n  (use "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git add <file>..."')]),t._v(" to update what will be committed)\n  (use "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git checkout -- <file>..."')]),t._v(" to discard changes in working directory)\n\n    modified:   business/com/test/core/actions/Photo.c\n\nno changes added to commit (use "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git add"')]),t._v(" and/or "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git commit -a"')]),t._v(")\n\n")])])]),a("p",[t._v("Then run "),a("code",[t._v("git stash")]),t._v(" to save these changes to a stack:")]),t._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[a("span",{pre:!0,attrs:{class:"token command"}},[t._v("(master) $ git stash")]),t._v("\nSaved working directory and index state WIP on master:\n2f2a6e1 Merge pull request #1 from test/test-branch\nHEAD is now at 2f2a6e1 Merge pull request #1 from test/test-branch\n\n")])])]),a("p",[t._v("If you have added files to your working directory these can be stashed as well. You just need to stage them first.")]),t._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[a("span",{pre:!0,attrs:{class:"token command"}},[t._v("(master) $ git stash")]),t._v("\nSaved working directory and index state WIP on master:\n"),a("span",{pre:!0,attrs:{class:"token command"}},[t._v("(master) $ git status")]),t._v("\nOn branch master\nUntracked files:\n  (use "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git add <file>..."')]),t._v(" to include in what will be committed)\n\n        NewPhoto.c\n\nnothing added to commit but untracked files present (use "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git add"')]),t._v(" to track)\n"),a("span",{pre:!0,attrs:{class:"token command"}},[t._v("(master) $ git stage NewPhoto.c")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token command"}},[t._v("(master) $ git stash")]),t._v("\nSaved working directory and index state WIP on master:\n"),a("span",{pre:!0,attrs:{class:"token command"}},[t._v("(master) $ git status")]),t._v("\nOn branch master\nnothing to commit, working tree clean\n(master) $\n\n")])])]),a("p",[t._v("Your working directory is now clean of any changes you made. You can see this by re-running "),a("code",[t._v("git status")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[a("span",{pre:!0,attrs:{class:"token command"}},[t._v("(master) $ git status")]),t._v("\nOn branch master\nYour branch is up-to-date with "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'origin/master'")]),t._v(".\nnothing to commit, working directory clean\n\n")])])]),a("p",[t._v("To apply the very last stash, run "),a("code",[t._v("git stash apply")]),t._v(" (additionally, you can apply "),a("strong",[t._v("and")]),t._v(" remove the last stashed changed with "),a("code",[t._v("git stash pop")]),t._v("):")]),t._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[a("span",{pre:!0,attrs:{class:"token command"}},[t._v("(master) $ git stash apply")]),t._v("\nOn branch master\nYour branch is up-to-date with "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'origin/master'")]),t._v(".\nChanges not staged for commit:\n  (use "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git add <file>..."')]),t._v(" to update what will be committed)\n  (use "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git checkout -- <file>..."')]),t._v(" to discard changes in working directory)\n\n    modified:   business/com/test/core/actions/Photo.c\n\nno changes added to commit (use "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git add"')]),t._v(" and/or "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git commit -a"')]),t._v(")\n\n")])])]),a("p",[t._v("Note, however, that stashing does not remember the branch you were working on. In the above examples, the user was stashing on "),a("strong",[t._v("master")]),t._v(". If they switch to the "),a("strong",[t._v("dev")]),t._v(" branch, "),a("strong",[t._v("dev")]),t._v(", and run "),a("code",[t._v("git stash apply")]),t._v(" the last stash is put on the "),a("strong",[t._v("dev")]),t._v(" branch.")]),t._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[a("span",{pre:!0,attrs:{class:"token command"}},[t._v("(master) $ git checkout"),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v(" -b")]),t._v(" dev")]),t._v("\nSwitched to a new branch "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dev'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token command"}},[t._v("(dev) $ git stash apply")]),t._v("\nOn branch dev\nChanges not staged for commit:\n  (use "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git add <file>..."')]),t._v(" to update what will be committed)\n  (use "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git checkout -- <file>..."')]),t._v(" to discard changes in working directory)\n\n    modified:   business/com/test/core/actions/Photo.c\n\nno changes added to commit (use "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git add"')]),t._v(" and/or "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git commit -a"')]),t._v(")\n\n")])])]),a("h2",{attrs:{id:"partial-stash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#partial-stash"}},[t._v("#")]),t._v(" Partial stash")]),t._v(" "),a("p",[t._v("If you would like to stash only "),a("strong",[t._v("some")]),t._v(" diffs in your working set, you can use a partial stash.")]),t._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[t._v("git stash -p\n\n")])])]),a("p",[t._v("And then interactively select which hunks to stash.")]),t._v(" "),a("p",[t._v("As of version 2.13.0 you can also avoid the interactive mode and create a partial stash with a pathspec using the new "),a("strong",[t._v("push")]),t._v(" keyword.")]),t._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[t._v("git stash push -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"My partial stash"')]),t._v(" -- app.config\n\n")])])]),a("h2",{attrs:{id:"list-saved-stashes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#list-saved-stashes"}},[t._v("#")]),t._v(" List saved stashes")]),t._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[t._v("git stash list\n\n")])])]),a("p",[t._v("This will list all stashes in the stack in reverse chronological order."),a("br"),t._v("\nYou will get a list that looks something like this:")]),t._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[t._v("stash@{0}: WIP on master: 67a4e01 Merge tests into develop\nstash@{1}: WIP on master: 70f0d95 Add user role to localStorage on user login\n\n")])])]),a("p",[t._v("You can refer to specific stash by its name, for example "),a("code",[t._v("stash@{1}")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"move-your-work-in-progress-to-another-branch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#move-your-work-in-progress-to-another-branch"}},[t._v("#")]),t._v(" Move your work in progress to another branch")]),t._v(" "),a("p",[t._v("If while working you realize you're on wrong branch and you haven't created any commits yet, you can easily move your work to correct branch using stashing:")]),t._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[t._v("git stash\ngit checkout correct-branch\ngit stash pop\n\n")])])]),a("p",[t._v("Remember "),a("code",[t._v("git stash pop")]),t._v(" will apply the last stash and delete it from the stash list. To keep the stash in the list and only apply to some branch you can use:")]),t._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[t._v("git stash apply\n\n")])])]),a("h2",{attrs:{id:"remove-stash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remove-stash"}},[t._v("#")]),t._v(" Remove stash")]),t._v(" "),a("p",[t._v("Remove all stash")]),t._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[t._v("git stash clear\n\n")])])]),a("p",[t._v("Removes the last stash")]),t._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[t._v("git stash drop\n\n")])])]),a("p",[t._v("Or a specific stash")]),t._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[t._v("git stash drop stash@{n}\n\n")])])]),a("h2",{attrs:{id:"apply-part-of-a-stash-with-checkout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apply-part-of-a-stash-with-checkout"}},[t._v("#")]),t._v(" Apply part of a stash with checkout")]),t._v(" "),a("p",[t._v("You've made a stash and wish to checkout only some of the files in that stash.")]),t._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[t._v("git checkout stash@{0} -- myfile.txt\n\n")])])]),a("h2",{attrs:{id:"recovering-earlier-changes-from-stash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#recovering-earlier-changes-from-stash"}},[t._v("#")]),t._v(" Recovering earlier changes from stash")]),t._v(" "),a("p",[t._v("To get your most recent stash after running git stash, use")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\ngit stash apply\n\n")])])]),a("p",[t._v("To see a list of your stashes, use")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\ngit stash list\n\n")])])]),a("p",[t._v("You will get a list that looks something like this")]),t._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[t._v("stash@{0}: WIP on master: 67a4e01 Merge tests into develop\nstash@{1}: WIP on master: 70f0d95 Add user role to localStorage on user login\n\n")])])]),a("p",[t._v("Choose a different git stash to restore with the number that shows up for the stash you want")]),t._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[t._v("git stash apply stash@{2}\n\n")])])]),a("h2",{attrs:{id:"interactive-stashing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interactive-stashing"}},[t._v("#")]),t._v(" Interactive Stashing")]),t._v(" "),a("p",[t._v("Stashing takes the dirty state of your working directory – that is, your modified tracked files and staged changes – and saves it on a stack of unfinished changes that you can reapply at any time.")]),t._v(" "),a("p",[a("strong",[t._v("Stashing only modified files:")])]),t._v(" "),a("p",[t._v("Suppose you don't want to stash the staged files and only stash the modified files so you can use:")]),t._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[t._v("git stash --keep-index\n\n")])])]),a("p",[t._v("Which will stash only the modified files.")]),t._v(" "),a("p",[a("strong",[t._v("Stashing untracked files:")])]),t._v(" "),a("p",[t._v("Stash never saves the untracked files it only stashes the modified and staged files. So suppose if you need to stash the untracked files too then you can use this:")]),t._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[t._v("git stash -u\n\n")])])]),a("p",[t._v("this will track the untracked, staged and modified files.")]),t._v(" "),a("p",[a("strong",[t._v("Stash some particular changes only:")])]),t._v(" "),a("p",[t._v("Suppose you need to stash only some part of code from the file or only some files only from all the modified and stashed files then you can do it like this:")]),t._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[t._v("git stash --patch\n\n")])])]),a("p",[t._v("Git will not stash everything that is modified but will instead prompt you interactively which of the changes you would like to stash and which you would like to keep in your working directory.")]),t._v(" "),a("h2",{attrs:{id:"recover-a-dropped-stash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#recover-a-dropped-stash"}},[t._v("#")]),t._v(" Recover a dropped stash")]),t._v(" "),a("p",[t._v("If you have only just popped it and the terminal is still open, you will still have the hash value printed by "),a("code",[t._v("git stash pop")]),t._v(" on screen:")]),t._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[a("span",{pre:!0,attrs:{class:"token command"}},[t._v("$ git stash pop")]),t._v("\n[...]\nDropped refs/stash@{0} (2ca03e22256be97f9e40f08e6d6773c7d41dbfd1)\n\n")])])]),a("p",[t._v("(Note that git stash drop also produces the same line.)")]),t._v(" "),a("p",[t._v("Otherwise, you can find it using this:")]),t._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[t._v("git fsck --no-reflog | awk "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/dangling commit/ {print $3}'")]),t._v("\n\n")])])]),a("p",[t._v("This will show you all the commits at the tips of your commit graph which are no longer referenced from any branch or tag – every lost commit, including every stash commit you’ve ever created, will be somewhere in that graph.")]),t._v(" "),a("p",[t._v("The easiest way to find the stash commit you want is probably to pass that list to "),a("code",[t._v("gitk")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[t._v("gitk --all $( git fsck --no-reflog | awk "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/dangling commit/ {print $3}'")]),t._v(" )\n\n")])])]),a("p",[t._v("This will launch a repository browser showing you "),a("strong",[t._v("every single commit in the repository ever")]),t._v(", regardless of whether it is reachable or not.")]),t._v(" "),a("p",[t._v("You can replace "),a("code",[t._v("gitk")]),t._v(" there with something like "),a("code",[t._v("git log --graph --oneline --decorate")]),t._v(" if you prefer a nice graph on the console over a separate GUI app.")]),t._v(" "),a("p",[t._v("To spot stash commits, look for commit messages of this form:")]),t._v(" "),a("p",[t._v("WIP on "),a("em",[t._v("somebranch")]),t._v(": "),a("em",[t._v("commithash Some old commit message")])]),t._v(" "),a("p",[t._v("Once you know the hash of the commit you want, you can apply it as a stash:")]),t._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[t._v("git stash apply *$stash_hash*\n")])])]),a("p",[t._v("Or you can use the context menu in "),a("code",[t._v("gitk")]),t._v(" to create branches for any unreachable commits you are interested in. After that, you can do whatever you want with them with all the normal tools. When you’re done, just blow those branches away again.")]),t._v(" "),a("h4",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("git stash list [<options>]")])]),t._v(" "),a("li",[a("code",[t._v("git stash show [<stash>]")])]),t._v(" "),a("li",[a("code",[t._v("git stash drop [-q|--quiet] [<stash>]")])]),t._v(" "),a("li",[a("code",[t._v("git stash ( pop | apply ) [--index] [-q|--quiet] [<stash>]")])]),t._v(" "),a("li",[a("code",[t._v("git stash branch <branchname> [<stash>]")])]),t._v(" "),a("li",[a("code",[t._v("git stash [save [-p|--patch] [-k|--[no-]keep-index] [-q|--quiet] [-u|--include-untracked] [-a|--all] [<message>]]")])]),t._v(" "),a("li",[a("code",[t._v("git stash clear")])]),t._v(" "),a("li",[a("code",[t._v("git stash create [<message>]")])]),t._v(" "),a("li",[a("code",[t._v("git stash store [-m|--message <message>] [-q|--quiet] <commit>")])])]),t._v(" "),a("h4",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Parameter")]),t._v(" "),a("th",[t._v("Details")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("show")]),t._v(" "),a("td",[t._v("Show the changes recorded in the stash as a diff between the stashed state and its original parent. When no "),a("stash",[t._v(" is given, shows the latest one.")])],1)]),t._v(" "),a("tr",[a("td",[t._v("list")]),t._v(" "),a("td",[t._v("List the stashes that you currently have. Each stash is listed with its name (e.g. stash@{0} is the latest stash, stash@{1} is the one before, etc.), the name of the branch that was current when the stash was made, and a short description of the commit the stash was based on.")])]),t._v(" "),a("tr",[a("td",[t._v("pop")]),t._v(" "),a("td",[t._v("Remove a single stashed state from the stash list and apply it on top of the current working tree state.")])]),t._v(" "),a("tr",[a("td",[t._v("apply")]),t._v(" "),a("td",[t._v("Like "),a("code",[t._v("pop")]),t._v(", but do not remove the state from the stash list.")])]),t._v(" "),a("tr",[a("td",[t._v("clear")]),t._v(" "),a("td",[t._v("Remove all the stashed states. Note that those states will then be subject to pruning, and may be impossible to recover.")])]),t._v(" "),a("tr",[a("td",[t._v("drop")]),t._v(" "),a("td",[t._v("Remove a single stashed state from the stash list. When no "),a("stash",[t._v(" is given, it removes the latest one. i.e. stash@{0}, otherwise "),a("stash",[t._v(" must be a valid stash log reference of the form stash@{"),a("revision",[t._v("}.")])],1)],1)],1)]),t._v(" "),a("tr",[a("td",[t._v("create")]),t._v(" "),a("td",[t._v('Create a stash (which is a regular commit object) and return its object name, without storing it anywhere in the ref namespace. This is intended to be useful for scripts. It is probably not the command you want to use; see "save" above.')])]),t._v(" "),a("tr",[a("td",[t._v("store")]),t._v(" "),a("td",[t._v('Store a given stash created via git stash create (which is a dangling merge commit) in the stash ref, updating the stash reflog. This is intended to be useful for scripts. It is probably not the command you want to use; see "save" above.')])])])]),t._v(" "),a("h4",{attrs:{id:"remarks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),a("p",[t._v("Stashing allows us to have a clean working directory without losing any information. Then, it's possible to start working on something different and/or to switch branches.")])])}),[],!1,null,null,null);s.default=n.exports}}]);