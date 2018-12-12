# Pharmaceautical Distributed Database System

This project is a distributed database management system for efficient storage and
retrieval of a large volume of pharmaceutical data from different manufacturers. A NoSQL based
document store, MongoDB has been used in which data was distributed using the sharding approach
of MongoDB. The records were horizontally partitioned into chunks balanced over different shards by
using names of salts present in a given medicine as the shard key. Subsequent to sharding, various
queries were designed and executed to extract the relevant information from the database. These
queries can be used to retrieve names of medicines with a given salt or vice versa; name of a substitute
for a given medicine; names of medicines for a given manufacturer name and so on. The distributed
database approach has been verified to give faster query execution results as compared to a
non-distributed MongoDB database. A web information system has also been developed for easy use
of the system.
