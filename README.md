# My bot
I didn't get to finish, and my program only runs once rather than on an interval. I was trying to figure out a way to smartly traverse the grid. I wanted to move ten spaces at a time, so that I wasn't doing any unnecessary scanning. However, I didn't have time to figure out a way to know when to turn.


## Overall thoughts

I think getting setup and figuring out the API definitely took sometime. Once I was able to figure out how to move, I start to make good progress. It took me a minute to figure out the mining process. I didn'trealize that I would need to use a while loop to mine a node until its value was used up. However, I thoughout to immediately relase the node once this process was completed. I feel like I could optomize this process for the case where there are two or more nodes to mine. Because the processes mining these nodes are not dependant on each other, I could probably having them running at the same time in a promise.all.


## If I had more time

I would refactor my code to make it dryer and faster.

## Dependencies

I just used axios for http requests. 

## Running my submission

You can run my submission using the *required* `start.sh` script.
I just set the host to the shared simultor. I did not run it on my local machine. If I had more time, I would explore doing this. 