// export interface DescriptorStat {
//   dev: Device,
//   ino: Inode,
//   type: DescriptorType,
//   nlink: Linkcount,
//   size: Filesize,
//   atim: Timestamp,
//   mtim: Timestamp,
//   ctim: Timestamp,
// }

export function getFlags(fd) {
  console.log(`[filesystem] FLAGS FOR ${fd}`);
}

export function setFlags(fd, flags) {
  console.log(`[filesystem] SET FLAGS ${fd} ${JSON.stringify(flags)}`);
}

export function dropDescriptor(fd) {
  console.log(`[filesystem] CLOSE: ${fd}`);
}

export function removeDirectoryAt(fd, path) {
  console.log(`[filesystem] RM DIR: ${fd} ${path}`);
}

export function unlinkFileAt(fd, path) {
  console.log(`[filesystem] UNLINK: ${fd} ${path}`);
}

export function writeViaStream(fd, offset) {
  console.log(`[filesystem] WRITE STREAM ${fd} ${offset}`);
}

export function appendViaStream(fd, offset) {
  console.log(`[filesystem] APPEND STREAM ${fd} ${offset}`);
}

export function readViaStream(fd, offset) {
  console.log(`[filesystem] READ STREAM ${fd} ${offset}`);
}

export function openAt(fd, atFlags, path, offset) {
  console.log(`[filesystem] OPEN AT ${fd}`, atFlags, path, offset);
}

export function stat(fd) {
  console.log(`[filesystem] STAT: ${fd}`);
}

export function getType(fd) {
  console.log(`[filesystem] TODO TYPE: ${fd}`);
}

export function dropDirectoryEntryStream(s) {
  console.log(`[filesystem] CLOSE DIR ENTRY STREAM ${s}`);
}
