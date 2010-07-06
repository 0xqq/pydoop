#!/bin/bash

# You need a working Hadoop cluster to run this.

nargs=1
if [ $# -ne $nargs ]; then
    echo "Usage: $0 EXAMPLE_SCRIPT_BASENAME (e.g., wordcount-full.py)"
    exit 2
fi
SCRIPT_BASENAME=$1
echo running test for ${SCRIPT_BASENAME}

HADOOP=${HADOOP_HOME}/bin/hadoop

BINDIR=../bin
CONFDIR=../conf
INPUTDIR=../input
INPUT_BASENAME=$(basename ${INPUTDIR})

SCRIPT=${BINDIR}/${SCRIPT_BASENAME}
CONF=${CONFDIR}/${SCRIPT_BASENAME/.py/.xml}
WD=test_pydoop_examples
HDFS_SCRIPT=${WD}/bin/${SCRIPT_BASENAME}
CONF_OVERRIDE="-D mapred.map.tasks=2 -D mapred.reduce.tasks=2"

rm -rf output

echo -n "Waiting for HDFS to exit safe mode... "
${HADOOP} dfsadmin -safemode wait
${HADOOP} dfs -mkdir ${WD}/bin
${HADOOP} dfs -put ${SCRIPT} ${HDFS_SCRIPT}
${HADOOP} dfs -put ${INPUTDIR} ${WD}/${INPUT_BASENAME}
${HADOOP} pipes ${CONF_OVERRIDE} -conf ${CONF} -program ${HDFS_SCRIPT} \
    -input ${WD}/${INPUT_BASENAME} -output ${WD}/output
${HADOOP} dfs -get ${WD}/output output
${HADOOP} dfs -rmr ${WD}

python check_output.py ${INPUTDIR} output && rm -rf output