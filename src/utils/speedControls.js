export const speedUpSim = (simSpeed, setSimSpeed, setSpeedDisplay) => {
  if (simSpeed === 100) {
    setSimSpeed(simSpeed);
  } else if (simSpeed > 100) {
    setSimSpeed(s => s - 100);
    setSpeedDisplay(c => c + 1)
  }
}

export const slowDownSim = (simSpeed, setSimSpeed, setSpeedDisplay) => {
  if (simSpeed === 1000) {
    setSimSpeed(simSpeed);
  } else if (simSpeed <= 1900) {
    setSimSpeed(s => s + 100);
    setSpeedDisplay(c => c - 1)
  }
}