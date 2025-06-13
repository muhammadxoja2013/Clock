function getMarsTime() {
  const now = new Date();
  const msSinceEpoch = now.getTime();

  // Julian date (days)
  const jd = msSinceEpoch / 86400000 + 2440587.5;

  // Mars Sol Date (MSD)
  const msd = (jd - 2405522.0028779) / 1.0274912517;

  // Martian Coordinated Time (MTC) in hours
  const mtc = (24 * msd) % 24;

  const hours = Math.floor(mtc);
  const minutes = Math.floor((mtc - hours) * 60);
  const seconds = Math.floor((((mtc - hours) * 60) - minutes) * 60);

  document.getElementById("mars-time").textContent =
    `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  document.getElementById("sol").textContent = Math.floor(msd);
}

setInterval(getMarsTime, 1000);
getMarsTime();