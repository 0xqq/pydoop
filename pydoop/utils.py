#-------------------------------------
# utility functions

from pydoop_pipes import raise_pydoop_exception

DEFAULT_HDFS_PORT=9000

def jc_configure(obj, jc, k, f, df=None):
  v = df
  if jc.hasKey(k):
    v = jc.get(k)
  elif df is None:
    raise_pydoop_exception("jc_configure: no default for option '%s'" % k)
  setattr(obj, f, v)
#--
def jc_configure_int(obj, jc, k, f, df=None):
  v = df
  if jc.hasKey(k):
    v = jc.getInt(k)
  elif df is None:
    raise_pydoop_exception("jc_configure_int: no default for option '%s'" % k)
  setattr(obj, f, v)

#--
def jc_configure_bool(obj, jc, k, f, df=None):
  v = df
  if jc.hasKey(k):
    v = jc.getBoolean(k)
  elif df is None:
    raise_pydoop_exception("jc_configure_bool: no default for option '%s'" % k)
  setattr(obj, f, v)

#--
def jc_configure_float(obj, jc, k, f, df=None):
  v = df
  if jc.hasKey(k):
    v = jc.getFloat(k)
  elif df is None:
    raise_pydoop_exception("jc_configure_float: no default for option '%s'" % k)
  setattr(obj, f, v)

#--
from urlparse import urlparse
import os

def __cleanup_file_path(path):
  while path.startswith(os.path.sep):
    path = path[1:]
  return os.path.join(os.path.sep, path)

def split_hdfs_path(path):
  """
  hdfs://foobar.foo.com:1234/foodir/barfile' -> ('foobar.foo.com', 1234, '/foodir/barfile')
  file:///foodir/barfile' -> ('',          0, '/foodir/barfile')
  hdfs:///foodir/barfile' -> ('localhost', 0, '/foodir/barfile')
  """
  r = urlparse(path)
  if r.scheme == 'file':
    if r.netloc != '':
      raise_pydoop_exception('split_hdfs_path: illegal hdfs path <%s>' % path)
    return '', 0, r.path
  if r.scheme != 'hdfs':
    raise_pydoop_exception('split_hdfs_path: illegal hdfs path <%s>' % path)
  npath = 'http:' + path[len('hdfs:'):]
  r = urlparse(npath)
  if r.netloc is '':
    return 'localhost', 0, __cleanup_file_path(r.path)
  parts = r.netloc.split(':')
  if len(parts) == 2:
    return parts[0], int(parts[1]), r.path
  else:
    return parts[0], DEFAULT_HDFS_PORT, r.path