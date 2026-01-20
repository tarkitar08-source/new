if (valid) {
                    localStorage.setItem('loggedIn', 'true');
                    localStorage.setItem('role', role);
                    
                    // Monitoring: simpan log
                    let logs = JSON.parse(localStorage.getItem('loginLogs') || '[]');
                    logs.push({ role, username, timestamp: new Date().toISOString() });
                    localStorage.setItem('loginLogs', JSON.stringify(logs));
                    
                    // Animate success
                    button.innerHTML = 'Login Berhasil!';
                    button.style.background = 'linear-gradient(45deg, #4ecdc4, #44a08d)';

                    // --- BAGIAN REDIRECT BERDASARKAN ROLE ---
                    setTimeout(() => {
                        if (role === 'admin') {
                            // Jika Admin, pergi ke dashboard admin
                            window.location.href = 'admin.html'; 
                        } else {
                            // Jika Publik, pergi ke halaman publik biasa
                            window.location.href = 'admin.html';
                        }
                    }, 1000);
                    // ----------------------------------------
                }