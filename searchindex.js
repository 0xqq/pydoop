Search.setIndex({docnames:["api_docs/hadut","api_docs/hdfs_api","api_docs/index","api_docs/mr_api","api_docs/simulator","examples/avro","examples/index","examples/input_format","examples/intro","examples/sequence_file","how_to_cite","ideas_list","index","installation","news/archive","news/index","news/latest","pydoop_script","running_pydoop_applications","self_contained","tutorial/hdfs_api","tutorial/index","tutorial/mapred_api","tutorial/pydoop_script"],envversion:53,filenames:["api_docs/hadut.rst","api_docs/hdfs_api.rst","api_docs/index.rst","api_docs/mr_api.rst","api_docs/simulator.rst","examples/avro.rst","examples/index.rst","examples/input_format.rst","examples/intro.rst","examples/sequence_file.rst","how_to_cite.rst","ideas_list.rst","index.rst","installation.rst","news/archive.rst","news/index.rst","news/latest.rst","pydoop_script.rst","running_pydoop_applications.rst","self_contained.rst","tutorial/hdfs_api.rst","tutorial/index.rst","tutorial/mapred_api.rst","tutorial/pydoop_script.rst"],objects:{"pydoop.hadut":{PipesRunner:[0,1,1,""],PydoopScriptRunner:[0,1,1,""],RunCmdError:[0,3,1,""],collect_output:[0,4,1,""],dfs:[0,4,1,""],find_jar:[0,4,1,""],get_num_nodes:[0,4,1,""],get_task_trackers:[0,4,1,""],path_exists:[0,4,1,""],run_class:[0,4,1,""],run_jar:[0,4,1,""],run_pipes:[0,4,1,""],run_tool_cmd:[0,4,1,""]},"pydoop.hadut.PipesRunner":{clean:[0,2,1,""],collect_output:[0,2,1,""],run:[0,2,1,""],set_exe:[0,2,1,""],set_input:[0,2,1,""],set_output:[0,2,1,""]},"pydoop.hadut.PydoopScriptRunner":{run:[0,2,1,""]},"pydoop.hdfs":{access:[1,4,1,""],chmod:[1,4,1,""],chown:[1,4,1,""],common:[1,0,0,"-"],cp:[1,4,1,""],dump:[1,4,1,""],file:[1,0,0,"-"],fs:[1,0,0,"-"],get:[1,4,1,""],hdfs:[1,1,1,""],load:[1,4,1,""],ls:[1,4,1,""],lsl:[1,4,1,""],mkdir:[1,4,1,""],move:[1,4,1,""],open:[1,4,1,""],path:[1,0,0,"-"],put:[1,4,1,""],rename:[1,4,1,""],renames:[1,4,1,""],rmr:[1,4,1,""],stat:[1,4,1,""]},"pydoop.hdfs.file":{FileIO:[1,1,1,""],TextIOWrapper:[1,1,1,""],hdfs_file:[1,1,1,""],local_file:[1,1,1,""]},"pydoop.hdfs.file.FileIO":{available:[1,2,1,""],close:[1,2,1,""],flush:[1,2,1,""],fs:[1,5,1,""],name:[1,5,1,""],next:[1,2,1,""],pread:[1,2,1,""],read:[1,2,1,""],readline:[1,2,1,""],seek:[1,2,1,""],size:[1,5,1,""],tell:[1,2,1,""],write:[1,2,1,""]},"pydoop.hdfs.file.hdfs_file":{pread_chunk:[1,2,1,""],read_chunk:[1,2,1,""]},"pydoop.hdfs.file.local_file":{close:[1,2,1,""],seek:[1,2,1,""]},"pydoop.hdfs.fs":{hdfs:[1,1,1,""]},"pydoop.hdfs.fs.hdfs":{"delete":[1,2,1,""],capacity:[1,2,1,""],chmod:[1,2,1,""],chown:[1,2,1,""],close:[1,2,1,""],copy:[1,2,1,""],create_directory:[1,2,1,""],default_block_size:[1,2,1,""],exists:[1,2,1,""],get_hosts:[1,2,1,""],get_path_info:[1,2,1,""],host:[1,5,1,""],list_directory:[1,2,1,""],move:[1,2,1,""],open_file:[1,2,1,""],port:[1,5,1,""],rename:[1,2,1,""],set_replication:[1,2,1,""],set_working_directory:[1,2,1,""],used:[1,2,1,""],user:[1,5,1,""],utime:[1,2,1,""],walk:[1,2,1,""],working_directory:[1,2,1,""]},"pydoop.hdfs.hdfs":{"delete":[1,2,1,""],capacity:[1,2,1,""],chmod:[1,2,1,""],chown:[1,2,1,""],close:[1,2,1,""],copy:[1,2,1,""],create_directory:[1,2,1,""],default_block_size:[1,2,1,""],exists:[1,2,1,""],get_hosts:[1,2,1,""],get_path_info:[1,2,1,""],host:[1,5,1,""],list_directory:[1,2,1,""],move:[1,2,1,""],open_file:[1,2,1,""],port:[1,5,1,""],rename:[1,2,1,""],set_replication:[1,2,1,""],set_working_directory:[1,2,1,""],used:[1,2,1,""],user:[1,5,1,""],utime:[1,2,1,""],walk:[1,2,1,""],working_directory:[1,2,1,""]},"pydoop.hdfs.path":{StatResult:[1,1,1,""],abspath:[1,4,1,""],access:[1,4,1,""],basename:[1,4,1,""],dirname:[1,4,1,""],exists:[1,4,1,""],expanduser:[1,4,1,""],expandvars:[1,4,1,""],getatime:[1,4,1,""],getctime:[1,4,1,""],getmtime:[1,4,1,""],getsize:[1,4,1,""],isabs:[1,4,1,""],isdir:[1,4,1,""],isfile:[1,4,1,""],isfull:[1,4,1,""],islink:[1,4,1,""],ismount:[1,4,1,""],join:[1,4,1,""],kind:[1,4,1,""],normpath:[1,4,1,""],parse:[1,4,1,""],realpath:[1,4,1,""],samefile:[1,4,1,""],split:[1,4,1,""],splitext:[1,4,1,""],splitpath:[1,4,1,""],stat:[1,4,1,""],unparse:[1,4,1,""]},"pydoop.mapreduce":{api:[3,0,0,"-"],simulator:[4,0,0,"-"]},"pydoop.mapreduce.api":{Closable:[3,1,1,""],Context:[3,1,1,""],Counter:[3,1,1,""],Factory:[3,1,1,""],JobConf:[3,1,1,""],MapContext:[3,1,1,""],Mapper:[3,1,1,""],Partitioner:[3,1,1,""],PydoopError:[3,3,1,""],RecordReader:[3,1,1,""],RecordWriter:[3,1,1,""],ReduceContext:[3,1,1,""],Reducer:[3,1,1,""]},"pydoop.mapreduce.api.Closable":{close:[3,2,1,""]},"pydoop.mapreduce.api.Context":{emit:[3,2,1,""],get_counter:[3,2,1,""],increment_counter:[3,2,1,""],job_conf:[3,5,1,""],key:[3,5,1,""],set_status:[3,2,1,""],value:[3,5,1,""]},"pydoop.mapreduce.api.Factory":{create_combiner:[3,2,1,""],create_partitioner:[3,2,1,""],create_record_reader:[3,2,1,""],create_record_writer:[3,2,1,""]},"pydoop.mapreduce.api.JobConf":{get:[3,2,1,""],get_bool:[3,2,1,""],get_float:[3,2,1,""],get_int:[3,2,1,""]},"pydoop.mapreduce.api.MapContext":{get_input_split:[3,2,1,""],get_input_value_class:[3,2,1,""],input_key_class:[3,5,1,""],input_split:[3,5,1,""]},"pydoop.mapreduce.api.Mapper":{map:[3,2,1,""]},"pydoop.mapreduce.api.Partitioner":{partition:[3,2,1,""]},"pydoop.mapreduce.api.RecordReader":{get_progress:[3,2,1,""],next:[3,2,1,""]},"pydoop.mapreduce.api.RecordWriter":{emit:[3,2,1,""]},"pydoop.mapreduce.api.ReduceContext":{next_value:[3,2,1,""]},"pydoop.mapreduce.api.Reducer":{reduce:[3,2,1,""]},"pydoop.mapreduce.pipes":{InputSplit:[3,1,1,""],run_task:[3,4,1,""]},"pydoop.mapreduce.simulator":{HadoopSimulatorLocal:[4,1,1,""],HadoopSimulatorNetwork:[4,1,1,""]},"pydoop.mapreduce.simulator.HadoopSimulatorLocal":{run:[4,2,1,""]},"pydoop.mapreduce.simulator.HadoopSimulatorNetwork":{run:[4,2,1,""]},pydoop:{hadut:[0,0,0,"-"],hdfs:[1,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","exception","Python exception"],"4":["py","function","Python function"],"5":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:exception","4":"py:function","5":"py:attribute"},terms:{"0a1":[12,15],"19th":[10,21],"3u5":14,"40x":14,"6th":23,"abstract":3,"boolean":[3,7],"break":[3,14],"byte":[1,3,9,17,22],"case":[0,1,3,4,5,9,13,17,19,22,23],"class":[0,1,3,4,5,7,9,11,12,14,19,22],"default":[0,1,3,7,8,14,17,18,22,23],"export":[5,13],"final":[1,3,4,13,17,22],"float":[3,20,22],"function":[0,1,3,11,12,14,20,22,23],"import":[1,3,4,5,7,17,19,20,22],"int":[1,3,5,20,22],"long":[0,5,17,18],"new":[1,3,7,10,12],"null":5,"public":7,"return":[0,1,3,7,19,20,22],"short":[0,13,14,17,18],"super":22,"throw":23,"true":[0,1,3,5,7,17,18,20],"try":[0,13,17],"var":14,"while":[1,5,13,17,22],Added:[14,16],Adding:22,For:[1,3,7,13,14,17,18,20],Jps:13,NFS:13,One:23,The:[0,1,3,4,5,9,11,12,13,14,17,18,19,21,22,23],Then:13,These:[3,13,22],Use:[17,18],Using:[6,12],With:[7,17,22,23],__init__:22,__main__:[5,18,20,22],__name__:[20,22],_vowel:19,abl:[1,5,8,13,14],about:1,abov:[1,5,7,13,17,20,22,23],absolut:1,abspath:1,accept:14,access:[0,1,3,11,12,18,21,22],accord:[1,8],accordingli:13,account:13,accumul:22,achiev:13,acm:[10,21],acmid:10,across:19,activ:[13,23],actual:[1,3,17,18],adam:5,adapt:18,add:[1,7,11,13,17,18],added:[1,14],adding:[14,23],addit:[0,1,11,13,14,17,18,19,21,22,23],address:[1,10],admin:[17,18],advanc:9,advantag:21,adventur:8,aeiouyaeioui:19,affect:0,after:[0,3,4,13,17],aggreg:[22,23],algorithm:23,alia:17,alic:[4,8],aliv:17,all:[0,1,3,5,13,14,17,19,21,22,23],allow:[0,1,3,5,11,12,20,21,22,23],alon:[4,13],alreadi:[17,18,19,22],also:[13,14,17,22],altern:[13,14,18],although:[1,9,13,22],alwai:[1,19],amd64:13,among:11,amount:[0,1,3,17,22],analog:4,analys:23,ani:[0,1,5,13,14],anoth:[1,3,5,14],anymor:13,anyth:11,apach:[0,7,9,13,14],api:[5,10,12,14,16,19,21,22,23],appear:9,append:[0,14],appl:14,appli:9,applic:[0,1,3,4,5,6,8,12,13,14,17,18,21],appropri:[0,1,4,9,13],arbitrari:22,architectur:23,archiv:[12,15,17,18,19],arg:[0,1],argument:[0,1,3,4,17,23],around:[0,1],artifici:9,assembl:5,assign:[3,17,22],associ:[1,22],assum:[4,5,17,22],atim:1,attempt:0,attribut:[1,3],author:10,auto:13,auto_seri:3,autom:0,automat:[1,3,5,8,13,14,19,22],avail:[0,1,5,8,9,11,14,18,19,21],avoid:[5,22],avro:[6,12,13,14,18],avro_input:4,avro_output:4,avro_output_key_schema:4,avro_output_value_schema:4,avrocontext:[5,14],avrolib:5,avroparquetinputformat:5,avsc:5,awai:23,awar:[5,14],back:[1,5,22],backend:[14,16],backward:[1,3,17],bar:1,base:[1,12,13,14,23],basenam:[1,20],bash:13,basi:22,basic:[3,4,9],been:[0,5,9,13,14,22],befor:[19,20],begin:22,behav:3,behavior:[4,5,18,22],being:[3,13,21,22],belong:22,below:[9,12,17],best:21,between:[3,22],beyond:1,bibtex:10,bin:[0,4,13],binari:[9,22],bind:13,bit:[1,9],bitmask:1,block:[1,9,20],block_siz:[1,20],blocksiz:1,booktitl:10,bool:[1,3],both:[1,13,17,18,23],box:14,branch:[13,14],brand:14,bring:18,broader:22,brows:0,buff_siz:1,buffer:[0,1],bug:[0,14,16],build:[0,12,14,18,19,20],build_ext:13,built:[1,7,14,21],bytes_read:22,cach:[5,14,17,18,19,22],cachea:18,call:[0,1,3,17,18,19,22,23],caller:[0,5],can:[0,1,3,5,7,8,9,11,13,14,17,18,19,20,22,23],cannot:[1,9],capac:[1,13],captur:11,care:17,carrol:8,cat:5,caus:14,cdh3:14,cdh4:14,cdh5:14,cdh:14,cento:13,cfg:13,cfz:19,chang:[1,17,22],charact:[1,9,17,23],chdir:1,check:[1,13,18],chicago:10,chmod:[1,14],choic:5,chosen:22,chown:[1,13],chunk:[1,3,22],cite:12,class_nam:0,classnam:[17,18],classpath:[0,1],clean:0,cleanup:22,client:[0,12,17,18,19],clone:13,closabl:3,close:[1,3,20,22],cloudera:14,cls:0,cluster:[0,13,14,18,19,23],cmd:0,cmd_file:3,code:[0,1,5,7,8,9,11,13,14,19,20,22,23],collaps:1,collect:[5,14],collect_output:0,colon:1,color:5,color_count:5,com:13,combin:[3,12,21,23],combiner_class:22,comma:18,command:[0,12,13,14,18,22],common:[0,1,20,23],commonli:12,commun:[3,4,22],compat:[1,3,14,17],compil:[5,7,13,14],complement:11,complex:9,compon:[1,3,4,22],compress:[9,17,18],comput:[10,17,21,22,23],concern:17,conf:[4,17,18,23],config:[17,18],configur:[0,2,3,4,7,8,9,13,14,17,18,19,22,23],connect:[1,4,18,20],consid:[3,7,9,23],consider:22,construct:[1,3],constructor:[1,3,4],contact:0,contain:[1,5,9,11,13,17,18,23],content:[1,2,4,19],context:[3,5,7,9,12,14,19,22],context_cl:4,context_class:[3,5],continu:20,control:[3,17],conveni:20,convers:[3,18],convert:[3,9,23],copi:[0,1,17,18,19,20],core:[14,22,23],correct:[13,22],correctli:23,correspond:[1,3,5,13,19],could:[0,1,9,11,17],count:[1,5,9,12,22],counter:[3,4,5,17,21,23],counter_id:3,counterpart:14,cours:[9,19],cpath:13,cprofil:22,cpython:21,creat:[0,1,3,4,17,19],create_combin:3,create_directori:1,create_partition:3,create_record_read:3,create_record_writ:3,createrecordread:7,creation:1,critic:[12,14],crs4:[7,10,13],ctx:5,current:[1,3,11,13,14,17,19,22,23],custom:[6,12,14,17,22],cut:22,daemon:[0,13],data:[0,1,3,4,5,6,9,11,14,17,22,23],data_in:4,data_in_path:4,data_in_s:4,data_in_uri:4,datanod:13,dataset:[3,5],deal:9,dean:23,debian:[13,14],debug:[4,14,22],decid:[9,11],decim:9,declar:22,decod:22,def:[3,5,9,12,17,19,20,22,23],default_block_s:1,defin:[1,4,14,22],degre:11,delet:1,depend:[0,6,14,19],deriv:3,descript:[3,14],deseri:5,design:23,desir:18,dest:1,dest_hdfs_path:1,dest_path:1,destin:1,detail:[7,13,14,22,23],detect:13,determin:1,dev:13,devel:13,develop:[3,10,11,13,14,22],dfs:[0,13],dfsadmin:[0,13],dict:[1,3,17],dictionari:[1,3,5,14,23],did:5,differ:[1,8,13,17,18,22],dimens:14,dir:[4,17,18,22],directli:[0,1,3,5,9,17,20],directori:[0,1,5,8,13,14,17,18,19,20,22],dirnam:1,disabl:18,discard:[1,22],disconnect:1,dispatch:[3,19],dist:14,distribut:[0,8,10,13,14,17,18,19,20,21,22,23],distro:13,distutil:13,doc:[5,12,14],docker:13,dockerfil:[13,18],document:23,doe:[0,4,14,23],doesn:[1,17],doi:10,domain:1,don:[13,17,18,23],done:[13,17,22,23],down:[14,22],downlink:3,download:13,drastic:14,driver:18,drop:[14,16],due:[1,11,20],dump:[0,1,20],dynam:17,each:[0,1,3,4,9,17,18,19,20,22,23],easi:[12,21],easier:14,easiest:[17,23],effect:22,effort:[14,22],either:[0,1,13],element:[0,3],elimin:19,els:[0,3,17],emit:[3,5,9,12,17,19,22,23],empti:[0,1,23],enabl:[5,12,13,14,22],encod:1,end:[1,22],ensur:0,entri:18,entry_point:18,env:[13,17,18],environ:[1,12,17],eof:1,equal:[1,3],equival:[0,1],error:[1,13,18],especi:[22,23],essenti:18,etc:3,even:[17,23],event:0,everi:1,everyth:13,exampl:[7,8,12,13,14,16,20,21,22],exce:17,exceedingli:19,except:[0,1,3,12,14,17,22],exchang:5,exec:13,execut:[0,5,13,17,18,19,22,23],exist:[0,1,17,18],exit:13,expand:[1,14],expandus:1,expandvar:1,expect:[4,19,22],experi:1,experiment:14,expert:18,explan:17,explicit:14,explicitli:[17,18,23],explor:22,express:[3,23],extend:7,extens:[0,12,13,14,19],extern:[1,5,14],extract:5,fact:[1,5,20,22],factor:1,factori:[3,4,5,22],fail:[0,13,14],fall:[1,5,9],fals:[0,1,3,7,20],familiar:11,fast_combin:3,faster:14,fastest:13,favorit:5,favorite_color:5,favorite_numb:5,feasibl:[19,23],featur:[11,12,14,18,19,21],feed:22,fetch:17,few:[0,3,14,23],field:[1,5],file:[0,2,3,4,5,7,9,11,13,14,17,18,19,20,22,23],file_in:4,file_out:4,fileinputformat:7,fileio:1,filenam:[3,18,22],fileoutputformat:9,filestatu:1,filesystem:1,filter:6,fin:4,find:[1,8,11,13,23],find_jar:0,fine:13,finish:[3,22],first:11,fit:[0,9],five:23,fix:[13,14,16],flag:[5,14,17,22,23],flexibl:14,flush:1,fmt:18,focus:[5,23],follow:[1,5,7,9,13,14,17,18,20,22,23],foo:[1,19],footnot:[21,23],forc:[0,1],force_pydoop_submitt:0,fork:11,form:1,format:[0,5,6,11,12,14,17,18,19,22],formatt:17,former:[0,5,22],forward:1,found:[0,1,12,13,23],four:9,fourth:[17,23],fout:4,fraction:[3,22],framework:[3,4,11,14,17,22,23],free:[8,12,13,14],from:[0,1,3,4,5,8,9,13,14,17,18,20,22],from_path:1,frozenset:17,fsshell:0,full:[0,1,9,11,12,13,17,18,20,21,23],fulli:[1,14],further:[1,14],futur:11,gain:14,gcc:13,gener:[1,5,17,18,20,23],get:[0,1,3,4,5,7,12,13,17,20,22,23],get_bool:3,get_count:[3,4,22],get_default_work_fil:22,get_float:3,get_host:1,get_input_split:3,get_input_value_class:3,get_int:3,get_num_nod:0,get_path_info:1,get_progress:[3,22],get_task_track:0,getatim:1,getattr:22,getboolean:7,getchild:22,getconfigur:7,getctim:1,getmtim:1,getsiz:1,ghemawat:23,gianluigi:[10,21],git:13,github:[11,13],give:[9,17],given:[1,3,4,17,23],global:[1,8,20],good:11,greatli:14,grep:[13,23],group:[1,3,10,13,22,23],guid:[12,23],gutenberg:8,hadoop:[1,2,3,5,6,7,8,10,11,12,13,14,16,17,18,19,21,22],hadoop_classpath:0,hadoop_conf_dir:[0,1,13],hadoop_hom:[1,13],hadoop_vers:13,hadoopsimulatorloc:4,hadoopsimulatornetwork:4,hadut:[2,12],handl:[2,9,14,22],happen:14,has:[0,1,3,5,9,13,14,17,18,21,22],hash:[3,22],hashlib:22,have:[1,4,5,9,13,14,17,18,22,23],hdf:[0,2,5,10,12,13,14,16,17,18,21,22],hdfs_dir:22,hdfs_file:1,hdfs_host:13,hdfs_input:[17,23],hdfs_output:[17,23],hdfs_path:1,hdfs_port:13,hdfs_user:[1,22],hdp:14,head:1,header:13,hel:20,hello:[20,23],help:[14,22],henc:3,here:[13,17,19,23],hexdigest:22,high:[10,14,20,21],hint:18,histori:13,hit:1,home:[1,13,17,18],hood:[20,23],host:[0,1],hostnam:[1,13],how:[5,7,11,12,13,14,20,22,23],how_mani:17,howev:[1,3,5,19,20],hpath:1,hpdc:10,hsn:4,http:[0,10,13],icount:[17,23],idea:12,idempot:22,ident:[17,22],ignor:[0,1,3,17],illinoi:10,imag:[9,13,18],implement:[3,5,11,13,19,21,23],impli:4,improv:[14,16],includ:[1,5,8,12,13,14,19,20,22,23],include_dir:13,incomplet:1,inconveni:17,incorrectli:14,increas:14,increment:22,increment_count:[3,22],independ:11,index:12,indic:0,individu:3,ineffici:20,info:[1,4,13,14,20,22],inform:[1,11,20,22,23],infrastructur:[3,4],initi:[1,4,22],inproceed:10,input:[0,1,3,4,5,6,7,9,11,14,17,18,19,22,23],input_:0,input_format:7,input_kei:23,input_key_class:3,input_path:0,input_split:[3,4,22],input_valu:23,input_word:22,inputformat:[6,11,12,14,17,18],inputsplit:[3,4,7,12],insert:1,instal:[1,5,8,12,14,18,20],instanc:[1,13,14,20,22,23],instanti:[0,1,3,20,22],instead:[1,3,9,11,17,18,23],instruct:[12,18],integ:9,integr:5,intend:0,interact:[2,12,14,18,22],interfac:[3,12,22],intermedi:[3,22],intermediate_kei:23,intermediate_valu:23,intern:[10,21],interpret:1,interv:17,introduc:14,introduct:[6,12,22],introductori:14,invoc:4,invok:[17,18],involv:23,ioerror:1,is_vowel:19,isab:1,isbn:10,isdir:[1,14,20],isfil:[1,14,20],isful:1,islink:1,ismount:1,isplit:22,isspac:17,issplit:7,issu:[0,13,14,17,22],istream:3,item:[1,20],iter:[1,17],its:[0,1,3,4,5,14,17,22],itself:[1,19],jar1:0,jar2:0,jar:[0,1,5,7,18],jar_nam:0,java:[0,1,3,5,7,11,13,17,18,22],java_hom:13,jdk:13,jira:0,jni:1,job:[0,3,4,8,9,11,13,14,18,19,22],job_conf:[3,4,22],jobconf:[3,14,17],jobcontext:7,jobhistoryserv:13,jobtrack:1,join:[1,17],jps:13,jpype:[14,16],jre:13,just:[11,23],jvm:[1,13],jython:21,keep:[9,17,18],keep_stream:0,kei:[3,5,9,12,17,18,19,22,23],key1:3,key2:3,keyword:[0,1],kill:[17,22],kind:[1,14,20],kmer:5,kmer_count:5,know:[1,9,13],knowledg:[11,21],kwarg:[0,1],lack:[11,19],larg:[9,23],last:[1,19],last_access:1,last_mod:1,later:[5,22],latest:[13,14],latter:[0,5,17,22],launch:[4,5,8,18,19],launcher:[0,18],layout:14,ld_library_path:[13,17,18],lead:23,len:[5,22],length:[1,3,22],leo:[10,21],let:[1,17],level:[1,5,11,14,17,18,21,22],lewi:8,liam:14,lib:[7,8,9,13],libhdf:[1,12,14],libhdfs_opt:1,libjar:[0,5,18],libjvm:13,librari:[12,13,14,21],library_dir:13,like:[1,3,9,11,13,17,18,23],limit:14,line:[0,1,4,9,12,14,18,22,23],linerecordread:[7,22],link:[1,19],linux:13,lion:14,list:[0,1,12,13,17,18,22],list_directori:1,listen:1,littl:14,load:[1,14,17,20],local:[0,1,13,14,17,18,22,23],local_fil:1,localhost:1,locat:[1,8,10,13,18,20,22],log:[0,4,17,18],logger:[0,4,22],logic:3,loglevel:4,longwrit:7,look:[0,1,11,13],lose:18,lot:[1,18],low:21,lower:23,lowercas:23,lsl:1,machin:[18,19],maco:13,made:[0,1,17],mai:[1,13,17,21,22],main:22,maintain:[10,14],major:14,make:[0,1,3,5,7,13,14,23],makedir:4,manag:14,mani:[1,9,14,22],manipul:[2,3,13,14,23],map:[3,5,8,12,14,18,19,22],mapcontext:3,mapper:[3,5,12,19,21,23],mapper_class:[5,22],mapr:[4,5,17,18,22],mapreduc:[0,1,2,5,7,9,10,12,13,14,16,17,18,19,21,22,23],mark:[14,17],master:13,match:23,materi:14,matrix:14,md5:22,mean:[1,17,18,22],medium:11,memori:[0,1],mer:5,messag:[0,17,22],metadata:1,method:[3,5,14,17,22],might:[8,13,17,18],millisecond:17,mimic:[1,22],min:22,minim:[18,22],minut:[17,22],misc:22,mkdir:[1,20],mode:[0,1,5,13,14,18,20],model:[5,23],modif:[1,7],modifi:[5,17,22],modul:[0,1,4,12,13,14,17,18,21,23],moment:[11,13],more:[1,3,5,7,13,14,20,22,23],more_arg:0,moreov:[5,23],most:[1,3,8,9,14,17],mostli:9,mount:[1,19],mountain:14,move:[1,5,14],mr_out_dir:0,msg:17,mtime:1,much:[1,9,14],multipl:[1,14,20,22],must:[0,1,3,5,11,14,17,19,22],mutabl:5,my_mr_app:4,n_reduc:22,name:[0,2,3,4,5,13,14,18,19,22],namenod:[1,13],namespac:5,nativ:14,need:[1,3,5,8,9,13,14,17,18,19,22,23],neg:1,neither:17,netloc:1,network:[4,22],new_kei:3,new_valu:3,newlin:[1,9],next:[1,3,22],next_valu:3,node:[0,13,14,17,18,19],nodemanag:13,non:[0,1,7,8,13,18],none:[0,1,3,4,5,9,22],nor:17,normal:1,normpath:1,noseparatortextoutputformat:14,notabl:[1,14],note:[1,5,8,13,14,18,22,23],noth:22,now:[3,5,14],num:[17,18,23],num_of_reduc:3,num_reduc:4,number:[0,1,3,7,11,17,18,22],numofreduc:3,numpag:10,object:[0,2,3,5,9,11,14,20,22],obtain:1,obviou:17,occurr:[5,19,23],off:23,offer:[8,12,14],offic:5,offlin:0,offset:[1,3,17,22],old:16,older:14,omit:1,onc:[1,3,22],one:[1,3,5,7,8,11,13,14,17,18,19,22],ones:[1,14],onli:[0,1,5,13,14,18],open:[1,14,17,20,22],open_fil:1,openjdk:13,oper:[1,20,22,23],opt:[8,13],optim:14,option:[0,1,5,8,9,13,14,17,18,23],order:[14,22],ordinari:1,org:[0,7,9,10],orient:[3,22],origin:23,osdi:23,oserror:17,ostream:3,other:[0,1,5,8,12,13,14,21,22],otherwis:[0,4],ouput:9,our:[1,9,21,23],out:[0,9,13,14,18],out_fil:0,outfn:22,output:[0,1,3,4,5,9,13,14,17,18,22],output_dir:4,output_dir_uri:4,output_kei:23,output_path:0,output_valu:23,output_word:22,outputformat:18,over:[1,5,11,17,21],overhead:1,overrid:[1,3,7,11,17,18],overridden:[7,17,18],overwritten:18,own:[0,4,11,13,22],owner:1,pack:9,packag:[1,5,7,8,13,14,19,21],page:[10,11,12,14,21],pair:[1,3,9,17,22,23],paper:[10,23],paramet:[0,1,3,4,7,14,22],parcel:14,parent:[0,1],parquet:6,pars:[1,14],parser:14,part:[1,3,5,10],parti:21,particular:[1,5,13,14],particularli:13,partit:[3,4,22],partition:[3,12,21],partitioner_class:22,pass:[0,1,3,5,17,22,23],patch:14,path1:1,path2:1,path:[0,2,4,5,7,13,14,17,18,20],path_exist:0,path_info:1,pattern:18,per:[5,17,22],perform:[1,3,10,11,12,14,16,17,18,20,21,22,23],permiss:[1,13,14],phase:[17,18,23],pip:[13,14],pipe:[0,3,4,5,12,14,17,22,23],pipes_cod:0,pipesrunn:0,place:[0,13,22],plain:[10,22],plan:13,platform:[1,12],pleas:[10,17],plu:3,plug:11,point:[1,18,19],port:[0,1,3,13],pos:1,posit:1,possibl:[3,5,9,11,13,19],ppm:10,pread:1,pread_chunk:1,preced:1,prefix:0,preprocess:14,prerequisit:[11,12],present:[1,3,22],preserv:18,pretend:[17,18],prevent:22,previou:[1,9,23],print:[17,18,20],private_encod:[3,5],privileg:13,probabl:13,problem:[5,9,14,22,23],proceed:[10,21],process:[0,3,9,11,14,17,22,23],produc:17,product:22,profil:[18,22],program:[4,5,12,14,17,21,22,23],program_nam:4,progress:[3,17],project:[5,8],prompt:13,properli:[1,13,19],properti:[0,1,3,13,14,17,18,20,22],protect:7,protocol:1,provid:[0,3,4,13,14,21,22],pseudo:13,pstat:[18,22],publish:10,pull:13,pure:[11,12,14],pursu:11,put:[0,1,20],pwd:0,pyavroc:14,pydoop:[2,5,7,8,9,10,11,12,13,14,19,20,21,22],pydoop_ex:0,pydoop_script:23,pydooperror:3,pydoopscriptrunn:0,pypath:[17,18],pypi:14,python3:[8,13],python:[5,6,7,10,12,13,14,16,17,18,19,21,23],pythonpath:[17,18],qualifi:1,quick:0,rais:[0,1,3,22],rang:[5,22],rather:[0,1,5,14,19],raw:[1,3,9],raw_hdfs_fil:1,reach:22,read:[1,3,5,9,12,13,14,17,20,22,23],read_chunk:1,reader:[3,11,12,18,21],readlin:[1,22],readlink:13,readonli:1,real:0,realpath:[1,4],reason:[1,13,18],recap:22,receiv:17,record:[3,4,5,9,11,12,14,17,18,21,23],record_reader_class:22,record_writer_class:22,recordread:[0,3,4,7,9,18,22],recordwrit:[0,3,4,9,18,22],recurs:1,reduc:[3,4,5,8,9,12,18,19,21,23],reducecontext:3,reducer_class:[5,22],reducer_id:22,reduct:3,redund:1,ref:1,refer:[1,20,22],regardless:1,reimplement:14,rel:1,releas:[13,14],relev:1,rememb:23,remov:[0,1,14,18],renam:1,repeat:22,replac:1,replic:1,repositori:13,repr:20,repres:[0,1,3,20],represent:[3,9],reproduc:[5,22],requir:[3,9,13,14,17,22,23],research:10,resolv:1,resourc:11,resourcemanag:13,respect:[3,7,13,17,22],respons:[0,3],rest:[17,22],restart:13,restructur:14,result:[0,4,5,6,13,22],retriev:[0,22],returncod:0,reus:5,revers:1,revis:14,rich:12,right:22,rmr:1,root:[1,8,18,20,23],root_path:0,rpath:13,rtpye:1,rule:1,run:[0,1,3,4,6,8,9,11,13,14,17,18,19,21,22],run_class:0,run_cmd:0,run_jar:0,run_pip:0,run_task:[3,5,22],run_tool_cmd:0,runcmderror:0,runner:[0,14],runtimeerror:3,safe:13,safemod:[0,13],same:[0,1,3,13,14,20,22],samefil:1,save:[9,17,22],sbt:5,schema:5,scheme:1,scipi:21,script:[0,12,13,14,18,20,21,22],search:[12,13,14,23],second:[1,4],section:[8,12,14,17,22],secur:0,see:[0,1,7,8,13,14,17,18,20,22],seek:[1,22],seek_cur:1,seek_end:1,seek_set:1,seekabl:1,select:[5,13,14,17,22,23],self:[3,5,9,12,19,22],self_contain:19,send:22,sens:1,sent:[3,22],sep:22,separ:[0,1,9,14,17,18,20,22],seq:5,sequenc:[0,3,5,9],sequence_fil:9,sequencefil:[6,12],sequencefileinputformat:9,sequencefileoutputformat:9,seri:10,serial:[5,9,12,14],serv:[14,22],server:[0,13,20],set:[0,1,3,4,5,7,9,12,13,14,17,19,22,23],set_ex:0,set_input:0,set_output:0,set_repl:1,set_statu:[3,22],set_working_directori:1,setup:12,setuptool:13,sever:[8,12,14,21,22],share:[0,3,13,18,19],shell:[2,12],ship:8,should:[1,3,5,13,14,17,18,22,23],show:[14,18,19,20,22,23],showcas:20,shown:[5,17],side:0,similar:22,similarli:[4,14],simon:[10,21],simpl:[7,9,14,17,22,23],simpler:14,simplest:17,simpli:22,simplifi:[14,23],simul:[2,12,14],sinc:[1,5,9,14,17,18,19,22,23],singl:[0,1,13,17,18,22],site:[5,8,14,18],situat:9,size:[1,20],skill:11,skip:13,slash:1,slave:[0,19],sleep_delta:4,slightli:5,slow:14,slower:14,slusser:14,small:13,smaller:3,snippet:22,softwar:18,solut:21,solv:[9,17,22,23],some:[0,1,11,13,18,21,22],someth:[13,22,23],soon:17,sophist:23,sourc:[1,9,13,14,18,19,20,22,23],space:9,span:22,spawn:1,special:[0,1],specif:14,specifi:[0,1,3,5,17,18,22,23],spent:22,spin:13,split:[1,3,7,9,11,12,17,22,23],splitabl:7,splitext:1,splitpath:1,src:1,src_hdfs_path:1,src_path:1,ssh:18,st_:1,st_size:[4,20],stand:4,standard:[0,8,9,13,14,18,21,22],start:[1,11,12,13,18,22],stat:[1,4,5,18,20],state:23,statist:20,statresult:1,stats_schema:5,statu:[3,17,21],stderr:0,stdout:0,step:11,stop_word:17,stop_words_fn:17,stopiter:[1,3,22],store:[0,1,5,13,18,23],str:[0,1,3,22],stream:[1,21,22],string:[0,1,3,5,13,14,17],strip:[13,17,19],struct:9,structur:[1,5,19,22],style:9,sub:8,subclass:3,subdirectori:[8,23],submiss:[8,14],submit:[5,9,12,14,17,19,22,23],submitt:[0,14,22],submodul:22,subset:3,substanti:22,substr:23,succe:0,succeed:3,successfulli:13,suffici:13,suitabl:4,sum:[5,9,12,17,19,22,23],superus:13,superusergroup:13,suppli:7,support:[0,1,3,4,5,12,14,16,19],suppos:[9,19,23],sure:[1,3,5,13],symbol:1,symlink:[1,19],symposium:[10,21,23],system:[0,2,13,17,20,23],tab:[9,17,22,23],tabl:[17,18],tail:1,take:[1,8,17,22],tar:19,tarbal:14,task:[0,1,3,4,8,9,11,17,18,19,22],taskattemptcontext:7,taskcontext:3,tbyte:20,tell:[1,17],ten:22,terasort:16,test:[0,12,14,20],test_root:20,text:[1,7,9,10,17,19,22,23],textinputformat:[4,7,17],textiowrapp:1,textlineread:4,textoutputformat:[17,22],tgz:19,than:[0,1,5,7,8,14],thank:14,thei:[3,9,11,19],them:[0,1,3,8,13,14,17,18],therefor:1,thi:[0,1,3,4,5,7,9,11,13,14,17,18,19,20,22,23],thing:[0,13,23],third:[17,21],thoroughli:14,those:[0,14],three:1,threshold:9,through:[1,3,4,12,13,17],thu:[19,22,23],time:[1,13,14,19,22,23],time_block:22,time_token:22,timeout:17,timer:[14,21],titl:10,tmp:[0,1,20],tmp_exist:0,to_hdf:1,to_path:1,to_str:4,togeth:7,token:22,tool:[0,12,14,23],top:[1,5],total:[1,3,22],tracker:0,traffic:22,trail:[1,13,23],transpar:[5,12,14],travers:17,travi:[13,14,18],tree:[1,20],trigger:[14,17],trivial:[9,14,19],troubleshoot:12,tupl:[1,3],turn:[1,23],tutori:[12,14,17,23],tweak:13,two:[3,5,9,17,23],txt:[4,13,17,20],type:[1,3,5,9,13],typic:[1,3,22],ultim:14,unabl:14,unchang:1,under:[5,9,13,19,20,22,23],understand:14,uniqu:17,unit:13,unix:[1,13],unless:4,unnecessari:1,unpack:19,unpars:1,unseri:3,unstabl:14,unsupport:14,until:[1,13,22],updat:[1,3,17,21,23],upgrad:13,upload:[5,17,18,19,22],upon:[1,8],upper:19,ups:0,uri:1,url:10,usa:10,usag:[8,12,13,14,18,20],usage_by_b:20,use:[0,1,3,5,7,9,10,14,17,18,19,22,23],used:[0,1,3,5,11,13,14,17,18,19,20,22],useful:[9,13,17,19,22],user:[1,3,4,5,8,12,13,14,22,23],usernam:1,uses:[0,1],using:[4,5,9,14,17,23],usr:[0,13],usual:[1,18],utf:22,util:[1,22],utim:1,valid:1,valu:[0,1,3,5,9,12,14,17,18,19,22,23],value1:3,value2:3,value_iter:23,valueerror:1,variabl:[1,13,17,18,23],vastli:14,verbos:19,verifi:13,version:[0,1,5,8,13,14,18],via:[0,3,5,12,13,14,17,18,22,23],view:3,vowel:12,vowelcount:19,wai:[1,13,17,22,23],wait:13,walk:[1,14,20],want:[1,5,13,22,23],weak:17,web:[5,18,22],well:[0,1],were:14,what:[1,4,17],when:[0,1,3,5,11,14,17,18,20,22],whenc:1,where:[0,1,5,9,13,17,18,19,22],whether:1,which:[1,3,4,5,11,13,14,17,20,21,22,23],who:8,whole:22,whose:[0,9,14,22],wide:22,width:5,window:[5,13],within:[8,11,17,22],without:[1,14,17],wonderland:8,word:[9,22],wordcount:[4,6,22,23],wordcount_ful:4,wordcountreduc:9,work:[0,1,4,5,10,11,12,13,14,17,18,22],workflow:[4,11],working_directori:[1,20],world:[20,23],would:[11,14,17,18,23],wrapper:[0,1,14,17,18],writabl:[0,1],write:[0,1,3,5,6,9,11,12,13,14,18,20,21],writer:[3,5,12,14,18,21,23],written:[1,4,5,17,23],wrong:13,wrote:9,xml:14,xmx48m:1,yarn:[13,14],year:10,yield:5,yml:[13,18],york:10,you:[0,1,5,7,8,9,10,11,12,13,14,17,18,19,20,21,22,23],your:[0,1,8,9,10,11,12,14,19,22,23],yourself:13,yum:13,zanetti:[10,21],zero:0,zip:[17,18,19]},titles:["<code class=\"docutils literal notranslate\"><span class=\"pre\">pydoop.hadut</span></code> \u2014 Hadoop shell interaction","<code class=\"docutils literal notranslate\"><span class=\"pre\">pydoop.hdfs</span></code> \u2014 HDFS API","API Docs","<code class=\"docutils literal notranslate\"><span class=\"pre\">pydoop.mapreduce.api</span></code> \u2014 MapReduce API","<code class=\"docutils literal notranslate\"><span class=\"pre\">pydoop.mapreduce.simulator</span></code> \u2014 Hadoop Simulator API","Avro I/O","Examples","Writing a Custom InputFormat","Introduction","Using the Hadoop SequenceFile Format","How to Cite","Ideas List","Contents","Installation","News Archive","News","New in 2.0a1","Pydoop Script User Guide","Pydoop Submit User Guide","Installation-free Usage","The HDFS API","Tutorial","Writing Full-Featured Applications","Easy Hadoop Scripting with Pydoop Script"],titleterms:{"0a1":16,"function":17,"new":[14,15,16],The:20,Using:9,access:17,api:[1,2,3,4,20],applic:[9,19,22,23],archiv:14,avro:5,build:13,cite:10,combin:[17,22],command:17,configur:1,content:12,count:[17,19,23],counter:22,custom:[7,11,23],data:8,depend:8,doc:2,easi:23,environ:[13,18],exampl:[5,6,9,17,19,23],featur:22,file:1,filter:9,format:9,free:19,full:22,guid:[17,18],hadoop:[0,4,9,23],hadut:0,handl:1,hdf:[1,20],how:[10,19],idea:11,indic:12,input:8,inputformat:7,inputsplit:11,instal:[13,19],interact:0,introduct:8,job:[17,23],level:20,line:17,list:11,low:20,manipul:1,map:[17,23],mapper:[17,22],mapreduc:[3,4],name:[1,17],object:[1,17],onli:[17,23],output:23,paramet:[17,23],parquet:5,partition:22,path:1,platform:13,prerequisit:13,program:18,pydoop:[0,1,3,4,17,18,23],python:[8,11],rc1:14,rc2:14,rc3:14,reader:22,record:22,reduc:[17,22],result:9,run:[5,23],script:[17,23],separ:23,sequencefil:9,set:18,setup:13,shell:0,simul:4,statu:22,stop:17,submit:18,support:13,system:1,tabl:12,test:13,timer:22,tool:17,troubleshoot:13,tutori:21,updat:22,usag:19,user:[17,18],vowel:19,word:[17,23],wordcount:9,work:19,write:[7,17,22,23],writer:[17,22],your:[13,17,18]}})