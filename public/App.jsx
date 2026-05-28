import { useState, useEffect } from "react";

const LOGO = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBAUEBAYFBQUGBgYHCQ4JCQgICRINDQoOFRIWFhUSFBQXGiEcFxgfGRQUHScdHyIjJSUlFhwpLCgkKyEkJST/2wBDAQYGBgkICREJCREkGBQYJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCT/wAARCAGQAZADASIAAhEBAxEB/8QAGwABAQADAQEBAAAAAAAAAAAAAAEFBgcEAgP/xABIEAABAwMBBAUHCgMGBgMBAAABAAIDBAURBhIhMUEHE1FhcRQiMoGRobEVIzU2QlJydLLBYnPRFjNjgoTCFyQlQ1PwZKLhg//EABwBAQACAwEBAQAAAAAAAAAAAAABBQMEBgIHCP/EAD0RAAIBAwEEBgcHAwMFAAAAAAABAgMEEQUSITFBBhNRYXGBFCIykaGxwSMzQnLR4fA0NYIVUvEWJUNikv/aAAwDAQACEQMRAD8A1hERcofoEIqVEBCiuEQEVREBMK4REAwphVEJCIiEBERAEROKAYTCIUAREQkKYVRCCIqUQEVwphUIBhMIiAIiuEBMJhVRCRuRTG9VCAiFEAREQBFVEBCrhEQBERAE5oVAgKhQJhAEVUQgIVSohITigVwhB8r6UVQkioURBkIqmEGSIqQogyFcKL6QHyUTirhCCIiqE5CmFUQZIrhRXKAYRECEZGFFSogCvFRVCck5qlMIhBEVwogyVFFUJTIiqYQERFcICKphEBEVwnqQECuEQICIqVEARfSiAiIUQgpURXCAiuVFcISFEKqEAIiIAiIgBUV4JhARVMJyQAKqJyQBAoiApUREAVCiqAqiiICoorhARUFCogKqoiAqmEUQF4IpxRAFVFUJCJlEIJlUKIgLlUr5VQkKKqIQVREQkoKFAiEAqKoUBFcqIgLxRAqhJ8oqqhBEVRCSIhTCEAqKpgoAERRAVRUIUBEREJCIiABXCiuUIIiqiAIiICoURARERAXimFFd6AYTCiuUAUV4phAOCiqYQERUphCSKphEBE4oiEBXCAKoCEIURCSKogOUIKplEQDKqmEQkJlFEB9KJlEBVMqIhBcplREBcoVEQkIiIQETuVwewoAiYwogCIiElCJyUQgK4UVCAJhMpxQkJhOCZQgIiIAhRRAFcpzVQEyrlRCgCq+UQH0vlXKnFCQqoqhAUVTCAIoiAuERRAEVCYQAFETCAiK4V5ISfKJzRCAqAgQoAiioQAqKqFAF+NbWwW+llq6mQRwxDac4/wDvFfstB6ULi/ao7c12GkGd47TnDf3Wa3pdbNRK3WNQ9BtZ3GMtcPF8DFXjXV2vNQae3mWlhcdlkcP94/xI3+oLzf2V1U/57yOtzxyZfP8AZtZW46AsMFDaYri5gdVVTdrbI3sZncB2Z4lbWt2d3Gk9ilFYRzFp0dq6hTV1f1pbUt6S5J8P+Fg5RbtZ3uwVHk9W6WeNhw+nqc7TfAneD7l021XKnvFDFW0rtqKQc+LTzB7wsNrawRXe0TVGwBVUrDJG/mQN5ae7GfWtd6Mbm6KvqbcXZjmj61o7HN4+0H3KKsYV6TqxWGuJksatzpV/Gwrz26c/Zb4r+cMeDOjYTCc0yq07UKKoEBFUKiAIj3NjY573Na1oy5zjgAd5Wp3XpCo6eXyW1QvuVSTgbGdjPjxd6vaslOlOo8RRp3moW9pHaryx834LizbCQASTgDeSeSwFy1xZrc4xMndWT8Oqphtb/HgtRvVRcKpu3qa6Gmad7bbS4Mh8W8G+LiT3LC0rKu71IobNQiFruLWHLiO18h5ewdy36VlHG1N/p7zktQ6U1trqraGG+Gd8v/lcPN57jP3DpMuL3llHRwUwBxmTMjv2C2PSr9TVeKu7zxx07hlsJhAkd37vRHvTTWiKOyBlRUhtVWjftkeZH+EdvefctmCw16tJLYpRXiWWk6ffykri/rPPKKeF543eXv7CKhEK0jpwiiICoURAFFSVEARXkmEAwiJyQBOKKIClREQBERAFVFUCCZUVQZCJlEJBUREIGU5oFcICIqogCIiALnHShSPbcqOqwdiSEx572uzj2OXR1jtQWWG/WySjlOw7O1HJjJY8cD4citi1qqnUUnwKjXbCV7ZTow9rivFfqePRFwhrtN0jWOBkp29RI3mCOHtGFnlxxny3oq5k4MDzu3jaimb8CPeO5Z//AIqVQjANqpzJ94SuA9mP3WzWspyltU96ZRab0nt6NFW96nCcFh7nvwbfqi4xW2w1ssjgHOjdFGPvOcMAfv6lonRnRvlv0lQB83TwOye92AP39iwl8v8AX6gnE1ZINlnoRMGGM8B296yemNZjTdM+n+To5hI/bfIHlrz2dowFsxtp06Eox3yZTV9ct7zVKVeo9mnT4bt7flnnjyR1jKLWLd0h2WtwJ3y0bj/5W5b7RlbDTVdNWx9ZS1EU7PvRvDh7lUzpTh7SwfQbXULa6WaFRS8Hv93E/bKKLD33VdssDSyeTrqnG6niILvXyaPFRCEpvEVlma4uaVtB1K0lFLtMxntWsXzXdBbnGnoR8oVedkNjPmA9hdz8AsJLHqTWbTLUPFrtPEk5aHN9e93icBef+0Nj0qww2GmbW1uMOrpt4H4f/wAwPFbtK1WcP1n2Lh5s5a+16pKG1T+ypv8AFJes/wAsfq93gfrVUV1u0QrtVXIWy35y2nG5zu5rO3xyVjKvVFNQxOpdN0nkMZGHVT/OnkHj9keHuWIqqq43+vDpXzVdVIcNaBk+AA4DwW8aY6PY6XYq7w1ssvFtMDljfxfePdw8VuT2KMc1X5Lh/PE5m2VzqNVxsYtdtSTzL38vCO/vZrunNG1+oHipnc+npHHLpn73SfhB4+J3eK6da7TRWalFNRQCNnFx4uee1x5lesAAAAAAbgByRVle6nVe/cuw7vSdCt9PjmPrTfGT4+XYv4wqFEWsXZcplMqZQgIqEQBMqIgCIiAKhMIgGECZRACorhRAEREAVURAFUyhQBREQBERAERVARVEQBRVRAEREAREQHxUQQ1UJhnijmjPFkjQ4ewrEO0bp97i42qnz3bQHsys0i9xnKPsvBr1rShWeasFLxSfzMI7Rmn3DHyXCPAuH7rw1XRvY6gHqhU0zu1km0B6nZW0qr2riquEmatTR7GosSox9yXyOU37QdxtDHT0xFbTt3ucwYe0dpb/AEXzoiwPuta+rfUSUtHSjbmmjeWE89kEcN28nkF1fw4rn+ubzS2ynksdsayJ07zJVdWMAZ37Pid2e7xW/RuqlVdXz7TktT6P2WnSV7n1F+HtfJJ8cdvcefUvSBPVl1LZi+CnHmmc/wB4/wAPuj3+C1GmqpKWqjqRh8kbxINsbQJBzvzxW29H1tstdFVvuLKeadrgGxzOwAzHEDPbz5LWbvDStu1VDbiZKYTObCQdrIzux2rco9XGTpRXD4nN6m7utSp39eontN4SfDHdy/mT2X/Vtz1E8tqZBHT582nj3MHj2nxX52PTFff5dmmZsQtOHzvHmt/qe4LN2LQzY2x12oZW0lOXANge8Nc4ngHHl4cfBdJghhp4WQwRsiiYMNYwYAHctatdwpLYor9C60zo5cahU9I1CT8H7T/RfxYMZp/TVDp6HZp2bczhh87x57u7uHcFl1EVTKbk8ye8+h0LenQgqdKOIrkgqoi8mYqKIgCIqhARRVCRwUVwogCIiAoQhRUICIqogKiIgIiKhAREyqgIiIgCK4UQBMIiAIrhCgGUyphMIAiIgCIiAIi8tzuVPaaKWsqn7McY5cXHkB3lSk28I8TqRpxc5vCW9nqK/LyqAHBnhB7DIM/FcsuOpb1qyr8kpWytjcfMpafO8driOPidyh6Or9sbRgpweOwZhtf09631ZRivtZpM5OXSirWk/QbeVSK57/0f69x1N1bSMGX1VO0fxStH7rH1uq7JQgmW50xI+zG7bPsblchr7dU2uoNPWU7oJRv2XjiO0doWTsWkLjqCHr6Y07IQ4sL5JOBHcMlZfQKUVtTnuK9dLL6tU6i3t/X7N7fu3GfvfSY6VjoLRE+LO41Eo84fhby8StHe50ry97i57jkuJySV0Cj6LaeMh1dcJJT9yBuyPaclbPbNN2m0AGkoYmyD/uPG2/2leldUKKxTWTDU0HVtUmql7NRXZ2eCW74nMLVo68XdzS2lMEJ/7s42W47hxPqC2aL5D0Q9kNIz5XvbyGtxwY48B/D4DJ8FvjvO38Vqd96P6WvkNVbZPIavO15udhzu3dvae8exYleKrLFR4Xd9Swn0blYUesso7dTtfFflXDPiaNqia91FxPy22SOQZ2GEYjA/gxux3rIaZ1zV2INp6naqqIbtgnz4/wAJ/Y7vBZV9/rLWwWnWFsNXTO3Nnxl3iHDc7xGCsZcdHMrITX6cqhcKbiYc/OM7u/wOD4rbUoOOxVSxyfL9jnHRuadeV1Y1JOa4xftrxX4l4e5HR7bdqO8UwqaKZssZ48i09hHIr2Lh1uuFdY6zr6aR8EzDsuaRx7nA8fArp2m9b0V8DaefZpa07tgnzZPwn9jv8VoXFlKn60d6Ov0bpRRvMUa/qVPg/DsfczY0RFonUhEwiAIiIAqoryQDKKJhAUIQgQoCFERAUIiiAqKKhCSKjgoU5IQFVEQBERAMqqIgLhRXKiAoRREBQhRQoAiIgCIiALnfShWyeVUdCHERtYZnDtJOB7gfat7uNwp7VRS1lU/YiiGSeZ7AO0lcg1FfZdRXE1ckbY2tb1cbB9luSd55nerDT6TlPbxuRyHTC/hTtPRlL15Y3dyZ0TQlngt9jhqg0eUVbeskfz2fst8Mb/ErZFruhbpDX6fghDx11KOpkZzAHonwI+C2JatxtdbLa45L3RlSVjS6n2dle/n55495gtY2WK72SoLmjrqdjpYn43ggZI8CAtS6Mrg6O6z0WT1c8Rfj+JvP2ErcdW3eK02Opc9wEkzHQxN5uc4Y9w3rS+jOhfJeZqsA9XTwluf4nbgPYCtyhn0ae1w5HN6psrXLfqfb/Fjs7/LPlg6aiIq07cIiID8qqlgrYHQVMMc0TuLHjIK0+u0FUW+oNdpusfTTDf1Ln4B7g79ne1bqiy0q06fsvcaF9plveJdbH1lwa3NeDOcV14obm/yLVltkoa9o2RWws2Xf5m8x4ZHgsDdtNVdvi8sp5GV1Cd7aqnOQPxDi0rrdwtdHdYDBW08c7OQcN7fA8R6lqM+h7lZ53VWm697c+lTyuHnDszwd6/arChdR4Ld3Ph+xx2qdHq2+U11i/wB0d014rhP4PvMbpfpAmo9iluxfPT8GzjfIzx+8Pf4ro1PUQ1cDJ6eVk0Txlr2HIK5XcmUE8piulC+x3H/yMjPUSHtLOLfFuR3LzW+63bSdQJIXskppDvDXbcM3gRwPsK9VrSNX1obn8GYNM6Q1rF9TdPbprn+KPinv9/k2dhRYfTup6HUUX/LuLKhoy+B585veO0d4WYVVOEoPZkt59At7ilcQVWjLMXzQVCiLyZy5RREIKiKFAERVARETCAIiISERCEAREQhDmiKoCImF9YQk+UVUQFURUoQRVRUIAoqiAiKlEJIiK8kIObdI12lq7nDaIclkOHOaPtSO4D1Aj2rL2/o3oIba+Otc+SslZvlad0Lv4Rzx38e5eibRT59W/LUlTG6DrBN1WydvaAGB2YyMraR2LeqXOxCMKT8fE5Wz0X0i6r3V/DOW1FP/AG9vuxg49V2y96Qr+uaZYtk4ZURDMbx2Hl6isj/xNvDYg3qaFzgPT2D8M4XUHAOaWkZaeIPArx/ItrMnWG20Zf2mBufgvfpkJr7WGWYP+mrm2k1YXDhF8n/Pocrjpr7rauEh6yocNxkcNmKIfAeA3rp2nrHDp+2to4jtuJ2pJCMF7u3w7AsixjY2hrGhrRwAGAPUvpYK906i2UsLsLPSdBp2U3XnJzqPjJ/T9SIqi1S/IiqIQRFVEJCcFcIgPPW0NNcYTDVwRzx/dkbkDw7Fqld0cQEvdaqySj2/Sik8+N37+3K3JVZadedP2WaF7plreL7eCb7eD963nKKnReorTOJ6enL3MO0ySkfkg9oG4hbfpbUV2rniju9sq45gN1T1Jax34uw943LZ8Z4qrNVu3VjicVntKyx6PRsa3WW1WSjzi8NP+dvEiKotQ6IiKq4Qg+UREBVVAqgPlFUKAIiIAoqVEBUREBFVEQkuVV8q5QBRVEIIiIgCqgRAXKiYVQBCnDevxqKympG7VTUQwtPAyPDc+1SlnciJSUVmTwj9kWEqNZ2Cm3OucTz2RAv+AUtWsLbeq80dF17nhhftPj2W4GO/PNZOpqY2tl4NNanZuapKrFye5JNN/AziLU9R67+Qri+hbQdc9rWu2zLsjeM8MLX5+k+6vyIaWjiHe1zz7ys0LKrNJpbmVt30msLacqU5NyTw0k+PyOmZTd2rVNEX+vv8Fa+tfGXROaGbDA0DIJ/ZaNLrG/yFwddakbyPNIb8AphZTlJwytxiu+k9tQoU7jZk1UzjhyeN+87JhXB+6fYuISagvEvp3Std/wD2d/Vfg+5VsnpVlS498rj+62Fpkucipl05pfhov3r9Dup44wcouCmomztGaTaG8HbOV26zTST2ihllcXSPp43OceJJaN617m06lJ5zkuNE6Qx1Oc4Kns7Kzxz9EexERaZ0ZNtucbTQRyygcDw3+C5V0iwyx6mlkLHNZLHGWO5Ow3Bx61rTZXt9GR48HEKyp6ftwUlLj3HD3vTF21xOg6Odlte1+x3sgjiCPFFp3RkZ32usknMjmumAY55JBw3fjK+Nba0mtE/ydbHtFQBmWXAPV54NA4Z59y1vRpOq6Ud5erXKMLCN/WWyny4vwXDxNzVXHYdZX/rW/wDVqg5I3OwRx7wuh61vFXY7THVUTmCUztYdtu0CCCeHqXqpZzhKMc8TBZdJbe5o1a6i0qeG+HPs39xn1MrmUPSdd2bpaejl/wArm/ArOWDpBdd7nT0EtvbE6YkbbZcgYBPAjuSdlVim2hbdKNPrzjTjJpt4WU+L95uSiw151bbrFVR01YJw6RnWB0bNoAZI3788l80+ttP1GNm4xxnsla5nxCwqjUa2lF4LSWp2kajpSqxUlybS+ZnEX4UtdSVrS6lqYJwOPVvDsexegDdnksbWNzNyM4yW1F5RERFBIwoqohJcoVEQgIiISEQogKEUVCEEREQBETKElyiiIQVREQk+ZZoqeMyTSxxMHFz3Bo9pWDrtc2GhJBr2zOHKBpf7+HvWm9JVTK+/RwOeTFHA0tZyBJOT4rXaO1V1ybI6kpZp2xDae5jchgxneeXBWlCxhKCnN8Tg9U6V3NK5nbW1NNxeMvLe7uX7m91fSlTNBFHbpZP4pnho9gz8VgazpFvlQT1Lqemby6uPJHrdlauNy2/TWiob/ZpK01ckc5c+ONmyNjIAwSeON/JbUqFvRW1JfUoKWq6vqdTqqNR5w3hYjw9xi6TU15nudLJJc6p561gwXnZILhkY4YW0dKlHM5lFUMic6GF0jXuAzsE4xn2LD0PR/fm1sT5IIYmRyNcXOmByAc7sZXQtT4dp+6HtppD7lgrVYRrQdPHkW2mafdVdOuqd5tLOGs55ZfPwWTieVvvRpY5eskvMhDYix0MTebzkZPgMYWhLrPR8caWpvxyfrKz383Glu5lR0StoVtQTn+FNrxWP1Nf6SbG6OZl4ZKC2QthewjeDg4I9i0UnAXUukvB06w//ACWfBy5aeB8FNjJypLPI89K6EKWoy2F7STfi+J2bStop7TZadkIJdMxs0jzxc4gH2DgFz3X1spbZfdmljETJohK5o4bRJzjs4LqFp+iqL8vH+kLnXSb9Pw/lW/qctKzm3cPL45Oo6S29OGkU1GKWzs47srf7zCaZpYK6/UNNUx9ZDLKGvYSRkYPYuoN0Zp9jSPkuA5GOLsj15XNdHDOqLaP8YfArsmyRxB9i9ahUlGaUXjcYOhtpQrWtSVWCk9rmk+SOdVPRbVdc801wpzDnzeta4OA78blvltpnUVvpaV7mudDEyMuHAkDGV6SDx3+tFpVbidVJTfA6iw0a1sZyqW8cOXe2RVAiwFqal0mMadPxuLQXNqGbLsbxkHK5c7cCRxXU+ko40638xH8HLlhzgq90/wC68z5P0xX/AHH/ABR2Ctu9PpvS0EzWMa5sLGQRDcHPLc+ziSuRTTSVEz5pnmSSRxc5x4kniVl9T343ypgEeW01NE2KJp5kNG07xJHsAXxpiyPv92jpTtCBvnzPH2Wf1PAL1b0lQg5z4vezFq99PVLmFtb+zHEYrtfN/wA5GwaK0VBcaUXO5Me6NzvmYs4DgPtHnjPALeL1aqe8WyajqAdlwy1w4scOBC9kcTIY2xxMDI2ANa0cABwCSeg7wKqKtxOpPbz4H0Wx0e3tLV26inles+3+cuw4Ljetx6ObH5ZXOur5MNpHbDGDi5xbxPcAVp3M+K6R0XfRVb+YH6Arm9k40W0fNejNCFbUqcZrKWX5pZXxPy6S7JLLDDdojtMgb1UreYBdud7Tj2Lni6/rjfpav/C39bVyDmsenzcqWHyNrphbQpX+1D8STfjvX0N/6LaGdprat8ZbBIGMY8jAeQTnHgtZqdTXiG41MsVzqmOMjtwkOOJ3Y4YXTtJHGmbZjlA34laDWdHt+NTI+OCGVr3kgtmAwCeecLDRqwlWm6mEWOo6fdUtOtYWm08Zbxn8WHy8Xg+KPpEvtOQJZIKlv+LHg+1uFnaPpTgIArba9n8UEm0PYcfFYjU2iotP2eKs8rfLMXtjkZsjZyQclp443c1qRys8aFvWW1FfQqquq6vplTqatR5wnh4lx8cnXqLXdhrSG+W9Q48p2lnv4e9ZyGeGpjEkEscsZ4OjcHD2hcRrLVXW1kclXSTQMlALHPbgOGM7jwO5bB0a1Ejb++FryI5IHFzRwJBGCtWvYwUHOD4F/pfSu5qXMLW6prMnjKynv7n+x1FTgqhVWd6EREICFMohIQKqIAmERAERAhAKIiAZRREJNU1LoeTUV48t8sZTwiJjMBhc8kZz2DmspR2ansGn6mjptojqZXPe7i92wd5WYC89z+jav+RJ+krP185JQb3IqnpdtRlVuYR9eSeX4/I4VncPBdU6Nvq3/qJP9q5UOA8F1bo3+rX+ok/2q21D7rzPnvQ7+4f4v6G0LHak+r1z/KyfpWRWO1L9Xrn+Vk/Sqal7a8UfTL7+mqflfyZxRbbYteNsVnhoWUBmfG5xLzLstOTnhjK1FZ+z6Lut8pG1dMKdkDyQHSSYzg4O4AldDXjTcfteB8b0qreU6zdinttclnduPvUOtKvUNKKWSmghiDxJ5hcXZGeZ8Vrp4FbHfdF1Wn7a2sqKuCTMgj2I2nmDvyfBa4eB8EodXs/ZcDzqnpnX5vs7eFxxw5cDudp+iqP8vH+kLnfSb9PQ/lm/qcuiWn6Lov5Ef6Qud9Jv09D+Wb+pyqrL79+Z9B6Uf2mP+Jqccj4Xtkie5j2nLXNOCD4r9n3KtlHn1lS7xlcf3Xr0xSw1uoKCnqYxLDJKGvYeDhgrqjdKWEY2bTR+tmfirC4uoUpJSWTj9G0K41ClKdKaik8b8/QwHRhUSy0FeySR7w2ZmNpxOMtOeK3RfjR0VJQRmKkpoadhOS2NgaCe1fuVSV6iqTclzPqGlWcrS1hbzeXHn5hFFViLA1PpK+rrfzDPg5cuXUukv6uN/Ms+DlyxXun/AHXmfJ+mP9w/xX1Kui9F81K6irKdrQ2rbIHvdzewjA9hz7VpNfZKy2UNFWVDNmOsa5zBzAHDPiN/gvRpS8fId7gqnnELj1U34DxPq3H1LLcQ62k1H+YNDRrh6ff051ljtzyUlx+OfA7KvmT0HeB+CoOd44I/+7d4H4LnkfZZcGcEPE+K6R0XfRVb+YH6Aubnj610jou+iq38wP0BX1/9y/I+S9Ev7nDwfyMvrf6rV/4W/rauQc11/XH1Wr/wt/W1cf5rHpv3b8Tc6bf1sPyr5s7PpL6s2z+QPiVlsrE6S+rFs/kN/dZZVFX25eLPoenf0tL8sfkjVOkr6ut/Mx/By5aeB8F1LpK+rrfzMfwcuWO4HwVzp/3PmfNOmP8AcX+VHZ6m0U9+07TUVTtBhhic1zeLHBowQsXprQ0mnrx5aK2Ooh6p7MFha8E4x2jktitf0bR/yI/0BerKqeunFSgnuZ9CWmW1eVK5nH14pYfh8woiLAWwREQgFETCElRRVAREUQgqIiAIiICIqiABee5/RlX/ACJP0lehea5n/ptX/Ik/SV6jxRiuPupeDOFjgPBdV6N/q1/qJP8AauVDgN/JdU6N/q1/qJP9qu9Q+68z5b0O/uH+L+htJWN1L9Xbl+Wk+CyWVjtS/V25/lpPgqal7a8T6bff01T8r+TOKLrXR79VaX8cn6yuSrrHR68HS1OA4EtkkBAPA7RO9XGo/dLxPm3Qv+vf5X80fh0mfV6P8yz4OXLTwK6b0mVcAs8NKZG9e+dr2s5loByfDeFzMjcvWnr7Iw9MJJ6i8PgkdytO+1UX5eP9IXO+k36eh/LN/U5bnpO9093s8Jhy19O1sMjHcWuDR7jjK51rG+RX+8OngYWxRM6ljid7wCfO7uK1LOnJV3lcDoekt3RnpNNRlnaxjvxx9x+ejzjU9t/nD4FdkHAELhVBWzW2shq4C0Swu2m7QyM+CzbukHUBBaKqJgIx5sLQVnvLWdaScSn6Oa/badQnTrJtt53Jdi70b5Wa6sNHNJC+qe+SMlrhFEXDI5Z4LM0tSyspYqiLPVysD27QwcEZC4Q7mV22wHNit35aP9IWpd2saMU4nR9HNeuNSrVI1UkksrHj4nvRFVoHXGp9Jf1cb+ZZ8HLlruB8FuvSTep5LgLQAG08IbKccXuIyCe4ArSsLoLKDjSWee8+P9KbmFfUJ7H4d3muJ1292YXnSLIQ3M8cEcsP4msG71jIXIvSXWtDXua9WfEzQJKUiEuHB4A3HxwtE1rZvka/TNY3EFR89H2YPEeo59ywWU3CcqMi06TW8Li2o6jR4NJP6fHK9xvuhrv8q2GJr3ZnpfmZM8SB6J9Y+C2CT0HeBXGdO6iqdOVpqIWtkjkGzLE44Dx48iORXXLVcIrxb4K2Jr2Rzt2tl3Eb8Ee5ad5bunPaXBnSdGtYhe26oSf2kVv71wT+We84ceJ8V0jot+ia38wP0BaDc6J9uuNTSSAh0MrmHPju92Fs/R/qSjtJqKKukEDJ3CRkrvRDgMEE8t2N6s7yLnRezvOH6OVYW2px657OMrf24aNu1x9Vq/8AC39bVyDmum651BbJLDNSQVkNRPUbIayJ4dgBwJJxw4LmSx6fFxpvK5m30yr06t7Hq5J4iuHizs2kvqzbP5DfiVllitKtLNNWwEYPk7Ssqqer7cvFn0nT91rS/LH5I1TpK+rrfzMfwcuWngfBdS6Sfq4PzMfwcuWngfBXOn/c+Z8z6Y/3F/lR3S2fRlH/ACI/0Belea2fRlH/ACI/0helUk/aZ9RtvuoeC+QVUReTMVREQkIhQFCAiIhJOaqg4qoCKoiAZRFUAworlRAF5rq4NtdYXEACCTJJ4eaV6Vp3SdUyw2emiY8tZNMRIB9oAZA8MrLQht1FEr9VulbWdSs1nC+e45mOA8F0fo0u9K6gfai4tqWvfKARue044HuWgUlBV17tmlpZ5z/hxly3XQ+l7vbbw2urKQwQiJ7fPcNrJG7dnKur3YdNqT3nzDoyrmnfQqUoNxe5vDxh8d50ABaf0j3ue32+Ghg80Vm0JH89gYy0eOVt4Kxt505b7+6B1c2V/UbWyGP2RvxnPsVNbzjCopT4I+m6vb17i0nRt3iUt3x3/DJxbjvW3dGU7xfJ4BIRG+nc5zQdxIIwfeVu1LpGxUZBjtdO4jnIC8//AGysrFTwQNxDBFEOyNgb8FvV7+M4OCXE5TSeiVe1uIXFSovVecLPz3HNddWq412pZDS0VTUM6qMB0cZI4dvBY2DQ+oagZFtezvke1vxK68VBuWKF/OEVGKW4sLjohb3FederUl6zbwsLj7zWtE6errDR1kdc2Jr5ntc0MftYwCN+PFa9H0X1zjmS40rMn7LHO/oukZyphYld1FJyXFlhPo7ZVKNOhUTcYZxv7d74YNCj6LB/3Lsf8kH9XL92dF1D9u5VR8GNC3fCYCO9rP8AERHoxpkf/F8X+pqEXRlZ2OG3U1sg5guaM+wLbIomQRMiiYGxsaGtaOAAGAF9phYqladT23ksbPTra0z6PBRyERN6xG6YC76Ktd7rX1lU6pErwGnYkAGAMDdhY9/RjaD6NTXN/wA7T/tW3os8bmrFYUiqraJYVZOdSkm3vbMVp3T1Ppunmgp5pZWyvDyZAMggY5Kah09S6jpBDUF0ckZ2opWjJYefiD2LK80K8dbPb287zZ9At/R/Rdj1OGDnEnRdWgnqrjTP/Gxzf6reNPW+S0WakoZnMdJCwtcWHIO8nd7V79yLJVualVbM2alhodpY1HVt4tNrHFv5+BrGstHNvv8AztG5kdc1uyQ7c2YDhk8iO1c1rrRcLdIWVtHNCRzc3zT4HgV3IDcnIjkeIPBZqF9OmtlrKK3Veitve1HWhLYk+PNPy/c4FtBu7Iwszp/S9bqCoYI43x02fnJ3DDQOeO09y66bfRF22aOm2u3qm5+C/YDZAA3AcAs09SbWIx3lXa9CIxqKVermK5JYz55PiCJlPDHBG3ZZG0NaOwAYC/RTCqrDvEklhGkdJl1pm0MdrDi6pdIyYtA3NaAeJ78rnJ4HwW/a60vdrpeDW0VL18PVMZ5rxtZA37iVpVXb6ygOKqkngP8AiRlvvV9ZOCppRe8+RdJo3NS+nUqwaityeHjC4bztVqcHWujc0ggwR4I5+aF6lp3RjVSzWiqhe8ujhmAjB+yCMkDuytxVNXhsVHE+naTdK5s6dZLGV8t30CqiLCWAREQBERAEREAQqKoCBVEKAK5XyqgKiiIAvyqKOmqiw1FPFN1Z2mdYwO2T2jK/VflNV09OWCaeOMvcGt23AbRPADtKlZzuPFTY2ftMY7z9A1rBhoDR2DcEyvPRXKiubXuo6mOcRnZfsHe09hHJelGmnhinOM4qUHld3AIiKD0FhrxqigsVVTU9W/HXk5LTkxjk4jsyvjVGqoNN0w3Nlq5B81ET/wDZ3d8Vo9l01WasfVXm51T4qYbRdOcZc4DlyDRuz7AtyhbprrKu6JzerazUp1VZ2K2qr3vsS47/AObvcdRjkbKxsjHNexw2muacgjtC++S5/wBGN2nkkqbXI4vhjZ1sR+5vwQO45yugDgsNek6U3FlppWoRv7aNxFYzxXY0ERFhLEIiEoAimVQgQREJQBMIEQDCIiAYTCIgCjnBrS4kAAZJPJXK570kXS6Nc2ibDLBb3HBlzundjON3ADsPFZqFJ1ZqKZXapqMbC3deSbxyX17F3m1f2usRqRT/ACpT9ZnHE7OfxYx71l+/II4jvXNqTR1rvWnG1lnqZnV8bfnIpSMF+N7ccu4817ujW91E/XWioc5whZ1kW1xYM4LfDePetirbQUXKm+HHJTWGu3E68KV3BJVFmMovK8H3/U3vKq89fUvoqCpqWRGZ8MTntjH2iBwWhUvSFdrZU9XeqVs0Uh2mujaGkD+Ejc4f+5WClbzqpuPItb/WLexqRp18ra543LxOiZQgObsuALTyO8Lw2m92+9w9bQ1LJCBl0fB7PFvFe4FYpRcXhlhSqwrQU6bTi+a3o/Kno6akMhp6eKHrDtP6tgbtHtOF+yIobzxPcYxisRWEFFcooJCIiElURCEAVUCISRUKYRCCooFUARRXKAFEQ7ggMRqXUNPp6kjlnbK4zP6tuw3Oz2nfu3dnNc0uVTVVjzT19T5TI5xmo6sHc7P2QeQOOH2XDHasvqiqnqNQVgp6gSPaBDLQTjAkaBu2d+Hcc8nDO5arPKxrHQsDuqLieqf6UTueD/73q8tKChFPmz5Z0i1WdxXlTz6kW0l4cfH5o2XS9/FDf4qqQ7Mdf8xVDgGy8nes4PrcuoLgRc95cS4+dvPeV2XSN3+W7HBUOOZo/mpvxDn6xg+ta+oUcYqLwLfobqm252k3/wCy+v6+8zCwep9VUum4MPa6Sqe3MMWycO5ZJ4YHPms4sdfLJS3+hdSVQI+0yQDzo3do/pzVfScFNbfA7G/jcSt5K1aU8bs/z3HPdPacrdZ3CS6XOSTyUv8AOeNxlP3W9gHu4LwW6zzXG91NipK8si25AHOLth4ZzIHHgstJadaWOB9ro3VE1G8kNdT4IweODxbnmNyzuidHTWMur67ZFVI3YbGDnq2njk9p9ytp19iMpbSxySPndrpTuatKg6MlJNupKWVntSfy5mT0zpen0zTvayTrp5cdZKRjOOAA5BYG+dIzaK7RxW5rKqliy2cncJD/AAnljt4HK/HV+rJbtP8AINk2pDI7q5JI+Mp+409naefgtfutn8hraXT1KWy1rnN8pkG8dY7g0dzQfaSsVGhtPbr72/l2m9qerOjT9F0r1YQaW0ucs+yu3tfb8+qWi7U96oI66mEgjkyMPbggjiF7F5I4qWy2dsbXbFPRwb3dzRvPif3Wg2rpOrYXBlwpWVMYOOsZ5j8d/In2LThbyq7Tprcjp7jWKViqVO9liUlvaW7Kxnv8DpKLy2y50t3o2VdHJ1kTt3DBaeYI5Fepa7TTwy3p1I1IqcHlPgxhAiKD2FAqmEAREQBEWPuN/ttre2OqqmNleQ1sTfOe4k7vNG9eoxcnhIx1a1OlHbqSSXeZBeO8XSGzW2evnBcyIZ2RxcScAesrW9c6ivNkdHHSRRQwzAhtR6TsjiMcGnf3r99SuF/0OZ6VzpMxRz797js+kD38fYs8KD9SUuDZUXOrxfX0KCfWU4t713cu3/g1uXV+raiB91ggDKBriDswhzB4k7z4rZbDf7drS3TW6vgYyoLfnIc7nD77D2j2hePozukVVbJbXLs9ZTkva13243Hf44JPtWu6ptM2kb9FW28lkD3dZAeTCOLD3fsVuuEJzdLGzJcGcvC6ube2p37qOrSnunF78Z3PHZ2e7tPyrae7aBvHWU0uY5ARHI5uWSt7HDtC2bo3tYbT1F5lmZLPUkxgNOSwZydrsJON3Z4rPCGg1bYInTs2oKmMOGPSjd3HtBytJsdr1BYtTTW63vje0AGV8gJiMZ9FzhyPYOPqUdb11OUXukuPfgyKxWnXtGvTTqUJP1Ut+y5Ls57v5lHTBlYq46aobi14dG2Nz95w0Fjj2lvDPeMHvWVbnG/iqqyM3F5izua9vSrx2Ksco5fd9G1ton8poXvgLDlr2vOwPB/Fvg7d/EVkLJry40jXxXihmnihOzJUxM3xn+LG4+5dAG5eG619FY7dJUz7EUDdwYxoG2T9kDmStz0rrFsTjlnN/wChegzdxa13TjxaayvNbkfmNSWg0tPVGvhEVS7YiJzlzuYxjO7O/sWSO7cuZ6cmrtUXmd5gp2UcYa/q+rGzEGkujY04yMu3nHEZW7UNfe5Jo4a+zxtJOJKmGoaY/ENO/wBS8V7dQeE9/ibWlaxO6jt1IvZbwmove1x7cLsz3p8DKqoi1DoAEREAREQBFCUBQBVROaAqJlCUBEKmVQgCqIgMVetM2u+tJq6YCbGBPH5rx6+frWg3/Qd2pMzU7jcYm8wPnWjvHP1ZXU0G5bNG6qUuD3FJqXR+0vk3OOzLtW5+fJ+ZxO12jyvraiskdS0FMfn5iN+fuNHN57OXEr9anUlX5TE+2vfb6am82nhid6I5l33nHmTxW/60sjri6GpMNRUQMY9kkUHpxuOCJWt4OO7BB4hc6qrJNCyWanlZVwxf3mwC2SIfxsdvA79471bUa0ay2pHzvUtOr6dJ0aXjtcG+fuXdnesvljrmnrr8tWemrjgPkZh4HAPG4+8e9ZFcg0xrCq02XxNjFRSyHadE44IPa08l02wX6m1DQeV0zXsDXFj2P4tdx9fFVd1aypSbS9U73Qteo31KNKUvtUt67cc18zJLT+kK63ikojT0lK5lHLhslUx2Sc/ZI+z481uChaHNLXAOaRggjIKw0pqElJrJa6jaSureVGE3Bvmv5w8MHK6SkvPR9VxXOehimjkj2SeIYT9naHou9xWR6O7e+63WsvlUS9zCQ1x5yP3k+ofFbDrew3K/0DY6KpaGxnbNM4ACUjgdrt7juXr0vbhZLDSwvaY37HWTbYwQ473Z8OHqW7UuVKi5fie7yOUs9EnR1GNLf1NP1lnGHLcuXv39hguky8mkt8VsjdiSqO1JjlGD+5+C8VPSUNo6O55KiSF89e3bDdoElx9ADwG/u3rF9W7XmsnZc8UznHJbxZC3cMd5+JXj05p+nvl/moRPKyljD3h4ALi0HA7snIWxGlGFNRbxjeypuL6tdXs69OCkqmacMvhwy/j8TaeivrI6KvlkyIDIwDPDIB2j7CFhLdfNT3CtqhZ6qpnjj25hE9wfiPa3elx4jct2vraXTmkamOiZ1TGRGKMZ3lzt2SeZ3krnel9Uf2ZZWPZSddPM0NY8vw1uM8RjfvIPqXil9rt1Yxznhkz3+LH0WwqVXBRTcnHOd+cJeawbxo7WL7+ZKSriZHVxN28s3NkbnBOORG5frcdeW+1XGWgq6arY+IjLmta4EEZBG/sWK6N7BPG6W8VQDRNHsQjIJcCcl3dwx7VhruKefpEeKt0XkzapjZDKRs7LWjOc8tyx9RSlWlFLcl8Tdeq39HTaFSUsTnLGWuMXnDf69hu9q1naLxWMpKZ8/XPBLRJFsg4GTvyvPddfWm1VMlLIyqfNGdlzWxYwfEkL9aKg05LcIZbayjbVQAyg0rhwPm+djdjetO1jE2LW8bpGhzHGncWuGQRuBz7Fjo0aU6mzh4wbuo6jf2lmqrnByc0spZWGvmmbXadfWe7VLKbM1NK87LOuaA1x7Mgke1fettSyacoohTtaaqoJDC8ZDAOJxzO8LVeky10lsudNJRwR05mjcXsjGyMg4DsDh/8AizWrLHWalsFuq4GGSsgha50fN4c0F2O/IyvSo0VKE/wvtNeeo6jKldWu51aeMOPNPj54PPZWaymmorrU1PX0znNcaZ0gaXRu3Z2QMcDlePpHsgpqmC707BGJnbEpYMfOcQ7xO/2JpfXnybHHbbxG8Rw/NtmA86MDk5vPHtW5Xqjh1BYp6aGRkjJ49qJ7TkbXFpHrXqU50aylJYXd2GOhbW2o6bOlRqOVTCeJPLUl9Hw7DVNR6mtV90jEyeob5e5rXtiYMubK3cc9gO/2r76L7oHx1NpmIOzmaIHmDucPgfWVhNAUFvq71JS3OlbLJsF0TZCdkOafOBHM47exfpfo3aP1iyrpWbMDnieNoGBsHc5nxHsWaVKGJW8ePFfsVdG9udqlrFTGymoSxnOObl38/cfGoLdVaK1AytoMimc/bgdyxzjPw8FnNSaksl/0lI4TtZVgtcynd6bXg78dowTvW4T01Hd6ENnjjqaWdgcAd4cDvB7itej6NbI2p61z6uSPORC6QbPtAyteNzTlsurlSj8S5raLd0Osp2DjKjV5P8Oea+nlu3F6OGyjTTTICGGZ5jz93d++VtAaASQACeJxxSKGOCJkUTGxxsAa1rRgNHYF9LSqz25uXadTYWvo1vToN52UlkDciLWdV60i0+TTU8XlFbshxafQjB4F39Ep05VJbMeJN5eUbSk61eWEjLXu90dhozU1kmyODGD0pD2Af+4XNpqq5a3ubJJmkQhxjggacDPEgHw3udyHqC/Klo7lqu4Nqq9807pfQYNzpAOTRwYwc3cB3ncuk2OwxWeIEiN05aGksGGsbx2G55c8neTvKsMQtY9sjjtu51+rs4cKC978fouC4n7WazU9koGUsAaXelI8DG27mfDkB2L3AKoq2UnJ5Z29GjCjBU6awluQQomQvJkJlBvRBuQFCKJlAXCYREJIicEyhARVQoCIERCS53qr5X0hAQoFEBcZWG1LbRUUT62njb5dSNMsTwN7gBvYe1rhkYWZTgvcJOLyjBc0I16bpT5/Dv8AFHGqCwO1BepoLTnyMPLutcDiKMndnv5Ac8LrNptVLZaGOjpGbMbN5J4vdzce8r0RQxQBwijjjDjtEMaBk9u5fYKz3F1Krhcio0bQaWn7VR75vnjGF2JFCIhWqX4XmuFDBcqSSkqWF0Ugw4BxafaF6FeKlNp5R4nCM4uMllM1m0aT/s38pSUEpmNRAWxNkGHtdg4G1wxnHLksN0cWyegudwjrYJKeobC0NZI3BI2t5HaOC3/CZxzWx6TJxkpb8/Qpv9DoRq0alH1VTbwuK38TR+lCvMVDR0IP97IZXDuaMD3n3L87jQUlv6NYGT9UZpWtljzja6xzs7v8vFZzUOjaDUMvlE0lRFUYDQ9j8jA/hO72YWAj6LT1o627ExDk2Hzses4WzRq0lTjFyxh54FHqVhfu7rVYUVNVI7K9Zbl24fv+p7ujB03yJMHk9WKgiPPgM49a1inoItSa1qqeZ0gilnmc4sIBAGccfALp1FQ01ntzKakheYoGktY3e954nxJK5db2X/T13fcW2aodI7bGJIXFvnceC90J7cqk47m+Br6ta+j0LO3rpyjF5lhN7t37o3vTmkKfTlZUTU1RJJHNGGbMgGQQc8Ry4LUOkz5rUMEjTgup2b+8Octo0tqS6X6unZVUcdJFBECWhjgXOJ3b3dwKwPSVSS1dzpG08M00jYCHiONzsZcccB4rzbuauPtHvwZtXjbVNGzZxahtblv7d+M7+0w1VR1FLqqlp9QTuq2ufGZHmQuDmO4bzvx2+tddOIWnOy0NG/kAtA1tZ6q8UtquFvpKiWQwCKVnVkPbgZGQd437Q9i22yzVNwtMTbjSywzbAjmZKB527BPgV4u5bcIz8mja6P0na3NegovDxKMnzWODfn8zE64sdDcrPU3EtYypgj6xk7d22ByJ5g8l4+i6plmtlXTSFxZBK0x55bQOR7Rn1ryO6ObtNmnkvDW0TXnq4y578Nzu83hnC2+xWOl0/QCkptp2Ttvkd6T3dp/ooqThGj1altfQmztbmvqcb2VHqkk0969Z+X83Gi6kt1ZbtbMntED5pXltUI4xnZJJDgewHB9q228abi1RFQvrg+l6rae+JuHP3483a4Y3dhWdwOPaqFhlcyezjc1zLK30KjTdZTe1Co87PJb8+P07jy2+20tqpW0lHCIoW7w0EnJ7STzXpG5UqLXbbeWXMIRhFQgsJci5RTCqg9ha7eNHMutbUVDLjUUrKtrGVMTGgiUNxjeeHALYicIAvcKkoPMTWurOjdQ2KyyvNd3LuZ4rXaaW0QmOmYcuxtyPO09+OGT+3AL2oiiUnJ5ZmpUoUoqFNYS5IIiLyeweC+V9JhARFcJhCSBXCIgCFEQEKivFEIA4oQgQoSRUKKoCqIoRhAVVREIGVVAFUBMK7lAeKFAUKFFUJIgQqIQXKZUVQkIiIQQlB3blU4ISN/EnPirtuAwCR6185VO5CAcu4oNygJVQkZRMJyQBVfIJX0EIIgREJKoURCAgKuVMISVFFUAyiYUQgvJRMqICplFOKApRRXCEjOE4qYVCEEREwhIBwqgCqAiIiAqhQIgIqEQIQVFEQBEUCAoVUUygKoicUBQEwqAplAArhQKoCFFSohJMKoVEIKEUCvFAERRAFcqIEB9KIiEhEVQgiIoUBcqr5RAXKiIEAX1jcvlUIC4U3KngohKQVUTKAKKoUBFURAVTKclEIKiZRCQoqogwVERAFFVEAVTCIAoeKuEKAYRAiAZTKKIAiJhCAiqnFAMqqIhJUymUCEBQqohICFRMIQEREAVUVQBRVEJIqUKIQRVqYQbkJKVEyiEhERAxlRFShBAhRVAEVUKAmUREAyqoiEFREQkIiISFFSphDyXKmUTCElQqIhBVEwqhJMoqhQgnFVRXKAFRMphAFUwphAMIqgCABEUQFRROCAqKKoAiKISVERAgiIgCiqIBhFFUAUV5ogIrhVQlCCKqKoSMIrhXCEZPlF9bKmygyfJVX1sqbKDJEX1sqbKDJEV2U2UGSIrspsoTkimV9YTZQjJ8ovrZKbKDJ8qq7JTCDJEVwU2UGT5wqrhMIMnzhVXZTZQZIiuEwgyRFdlNlCckRXCbKEZIiuEwgyRFcJhBkiK4TCDJEV2UwgyRFdlNlBkiL6wmCgyfON6L6wmEGT5RXCYQZImCrspgoMkAwqmE2UGT/9k=";
const RED  = "#E8160C";
const DARK = "#0d0d0d";
const ADMIN_PIN = "2424";

const SERVICES = [
  { id:1,  name:"Hair Kut w/ Beard Trim",        price:65,  priceLabel:"$65",   duration:"45 min", desc:"Haircut + beard line, trim, or shave. No enhancements.", category:"Popular" },
  { id:2,  name:"Hair Kut (No Face)",             price:50,  priceLabel:"$50",   duration:"30 min", desc:"Haircut only. No enhancements or face work.",             category:"Popular" },
  { id:3,  name:"Kids Kut (14 & Under)",          price:40,  priceLabel:"$40",   duration:"30 min", desc:"For kids 14 and under.",                                  category:"Popular" },
  { id:4,  name:"Beard Supreme",                  price:60,  priceLabel:"$60",   duration:"45 min", desc:"Beard line + trim with hot comb, enhancements & steam.",   category:"Popular" },
  { id:5,  name:"Hair & Beard Line (No Taper)",   price:40,  priceLabel:"$40",   duration:"30 min", desc:"Hair and beard line only. No taper.",                      category:"Cuts" },
  { id:6,  name:"Hairline Only",                  price:25,  priceLabel:"$25",   duration:"30 min", desc:"Hairline only. No face or taper.",                         category:"Cuts" },
  { id:7,  name:"Beard Trim",                     price:35,  priceLabel:"$35",   duration:"20 min", desc:"Full face shave, goatee or beard line & trim.",             category:"Beard" },
  { id:8,  name:"Mustache",                       price:10,  priceLabel:"$10",   duration:"5 min",  desc:"Mustache line up only. No full face shave.",                category:"Beard" },
  { id:9,  name:"Goatee",                         price:12,  priceLabel:"$12",   duration:"10 min", desc:"Goatee line only. No full face shave.",                    category:"Beard" },
  { id:10, name:"Facials",                        price:30,  priceLabel:"$30+",  duration:"30 min", desc:"Facial treatment.",                                        category:"Extras" },
  { id:11, name:"Eyebrows",                       price:15,  priceLabel:"$15",   duration:"10 min", desc:"Eyebrow shaping.",                                         category:"Extras" },
  { id:12, name:"Hair & Scalp Treatment",         price:15,  priceLabel:"$15",   duration:"15 min", desc:"Hair and scalp treatment.",                                category:"Extras" },
  { id:13, name:"Enhancements",                   price:10,  priceLabel:"$10+",  duration:"5 min",  desc:"Add-on to any service.",                                   category:"Extras" },
  { id:14, name:"Graphics",                       price:5,   priceLabel:"$5+",   duration:"15 min", desc:"Custom hair graphics & designs.",                          category:"Extras" },
];

const TIME_SLOTS = ["9:00 AM","9:30 AM","10:00 AM","10:30 AM","11:00 AM","11:30 AM","12:00 PM","12:30 PM","1:00 PM","1:30 PM","2:00 PM","2:30 PM","3:00 PM","3:30 PM","4:00 PM","4:30 PM","5:00 PM","5:30 PM","6:00 PM"];
const DAYS   = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const CATS   = ["All","Popular","Cuts","Beard","Extras"];

function getDates() {
  const out = [], t = new Date();
  for (let i = 1; i <= 25 && out.length < 14; i++) {
    const d = new Date(t); d.setDate(t.getDate() + i);
    if (d.getDay() !== 0) out.push(d);
  }
  return out;
}
const fmtCard  = v => v.replace(/\D/g,"").slice(0,16).replace(/(.{4})/g,"$1 ").trim();
const fmtExp   = v => { const c=v.replace(/\D/g,"").slice(0,4); return c.length>=3?c.slice(0,2)+"/"+c.slice(2):c; };
const fmtPhone = v => { const d=v.replace(/\D/g,"").slice(0,10); if(d.length<4)return d; if(d.length<7)return`(${d.slice(0,3)}) ${d.slice(3)}`; return`(${d.slice(0,3)}) ${d.slice(3,6)}-${d.slice(6)}`; };
const fmtDate  = d => `${DAYS[d.getDay()]}, ${MONTHS[d.getMonth()]} ${d.getDate()}`;
const genId    = () => "TKB-"+Math.random().toString(36).slice(2,8).toUpperCase();

function useBookings() {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    (async () => { try { const r = await window.storage.get("tkb_bookings"); if(r?.value) setBookings(JSON.parse(r.value)); } catch {} })();
  }, []);
  const persist = async next => { setBookings(next); try { await window.storage.set("tkb_bookings", JSON.stringify(next)); } catch {} };
  const addBooking    = b  => persist([b, ...bookings]);
  const updateBooking = (id, ch) => persist(bookings.map(b => b.id===id ? {...b,...ch} : b));
  return { bookings, addBooking, updateBooking };
}
function useTwilio() {
  const [cfg, setCfg] = useState({ sid:"", token:"", from:"" });
  useEffect(() => {
    (async () => { try { const r = await window.storage.get("twilio_cfg"); if(r?.value) setCfg(JSON.parse(r.value)); } catch {} })();
  }, []);
  const saveCfg = async c => { setCfg(c); try { await window.storage.set("twilio_cfg", JSON.stringify(c)); } catch {} };
  return { cfg, saveCfg };
}

const bg   = { fontFamily:"'Barlow',sans-serif", background:DARK, color:"#f0ece4", minHeight:"100vh" };
const hdr  = { padding:"20px 24px", borderBottom:"1px solid #1e1e1e", display:"flex", alignItems:"center", gap:12 };
const lbl  = { display:"block", color:"#666", fontSize:10, textTransform:"uppercase", letterSpacing:3, marginBottom:8 };
const inp  = f => ({ width:"100%", background:"#161616", border:`1px solid ${f?"rgba(232,22,12,0.5)":"#2a2a2a"}`, color:"#f0ece4", padding:"13px 16px", fontSize:14, borderRadius:3, outline:"none", boxSizing:"border-box", fontFamily:"'Barlow',sans-serif" });
const redBtn  = dis => ({ background:dis?"#1e1e1e":RED, color:dis?"#3a3a3a":"#fff", border:"none", padding:"15px", width:"100%", fontSize:11, fontWeight:700, letterSpacing:3, textTransform:"uppercase", cursor:dis?"default":"pointer", borderRadius:2 });
const ghostBtn = { background:"transparent", color:RED, border:"1px solid rgba(232,22,12,0.45)", padding:"13px", width:"100%", fontSize:12, fontWeight:600, letterSpacing:2, textTransform:"uppercase", cursor:"pointer", borderRadius:2 };

const STATUS = {
  pending:   { label:"Pending",   bg:"rgba(232,22,12,0.12)",   color:RED,       dot:RED },
  confirmed: { label:"Confirmed", bg:"rgba(96,165,250,0.12)",  color:"#60a5fa", dot:"#60a5fa" },
  completed: { label:"Completed", bg:"rgba(74,222,128,0.12)",  color:"#4ade80", dot:"#4ade80" },
  cancelled: { label:"Cancelled", bg:"rgba(248,113,113,0.12)", color:"#f87171", dot:"#f87171" },
};
function Badge({ status }) {
  const s = STATUS[status]||STATUS.pending;
  return <span style={{ background:s.bg, color:s.color, fontSize:10, fontWeight:700, letterSpacing:1, textTransform:"uppercase", padding:"4px 10px", borderRadius:2, display:"inline-flex", alignItems:"center", gap:5 }}><span style={{ width:5,height:5,borderRadius:"50%",background:s.dot,display:"inline-block" }}/>{s.label}</span>;
}

// ── LANDING ──────────────────────────────────────────────────────────────────
function Landing({ onBook, onQuick, onAdmin }) {
  const pop = SERVICES.filter(s=>s.category==="Popular");
  return (
    <div style={bg}>
      {/* Hero — red band */}
      <div style={{ background:"#111", padding:"40px 24px 32px", textAlign:"center", borderBottom:"1px solid #1e1e1e" }}>
        <img src={LOGO} alt="The Kut Barbershop" style={{ width:200, height:200, objectFit:"contain", display:"block", margin:"0 auto 16px" }} />
        <p style={{ color:RED, fontSize:10, letterSpacing:4, textTransform:"uppercase", margin:"0 0 6px" }}>South Side Chicago</p>
        <p style={{ color:"#555", fontSize:12, margin:"0 0 20px" }}>3960 S Cottage Grove Ave · Chicago, IL 60653</p>
        <div style={{ display:"flex", border:"1px solid #2a2a2a", borderRadius:4, overflow:"hidden", maxWidth:320, margin:"0 auto 24px" }}>
          {[["4.9","Rating"],["398","Reviews"],["14+","Services"]].map(([v,l],i)=>(
            <div key={l} style={{ flex:1, padding:"14px 12px", textAlign:"center", borderRight:i<2?"1px solid rgba(0,0,0,0.2)":"none" }}>
              <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:26, color:RED }}>{v}</div>
              <div style={{ color:"#444", fontSize:10, textTransform:"uppercase", letterSpacing:2, marginTop:3 }}>{l}</div>
            </div>
          ))}
        </div>
        <button onClick={onBook} style={{ background:RED, color:"#fff", border:"none", padding:"15px", width:"100%", maxWidth:320, fontSize:11, fontWeight:700, letterSpacing:3, textTransform:"uppercase", cursor:"pointer", borderRadius:2, display:"block", margin:"0 auto" }}>Book Your Appointment</button>
      </div>

      {/* Popular Services */}
      <div style={{ padding:"32px 24px 8px" }}>
        <span style={lbl}>Popular Services</span>
        {pop.map(s=>(
          <div key={s.id} onClick={()=>onQuick(s)} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"18px 0", borderBottom:"1px solid #191919", cursor:"pointer" }}>
            <div>
              <div style={{ fontWeight:500, fontSize:15, marginBottom:4 }}>{s.name}</div>
              <div style={{ color:"#555", fontSize:12, textTransform:"uppercase", letterSpacing:1 }}>{s.duration}</div>
            </div>
            <div style={{ textAlign:"right" }}>
              <div style={{ color:RED, fontWeight:700, fontSize:17 }}>{s.priceLabel}</div>
              <div style={{ color:"#333", fontSize:10, textTransform:"uppercase", letterSpacing:1, marginTop:4 }}>Book →</div>
            </div>
          </div>
        ))}
        <div style={{ paddingTop:24, paddingBottom:16 }}><button onClick={onBook} style={ghostBtn}>View All Services</button></div>
      </div>

      {/* Amenities */}
      <div style={{ padding:"24px 24px 16px", borderTop:"1px solid #191919" }}>
        <span style={lbl}>Amenities</span>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
          {[["P","Free Street Parking"],["W","Free Wi-Fi"],["A","ADA Accessible"],["C","Child Friendly"]].map(([ic,lab])=>(
            <div key={lab} style={{ background:"#161616", border:"1px solid #1e1e1e", borderRadius:3, padding:"12px 16px", display:"flex", alignItems:"center", gap:10 }}>
              <div style={{ width:28,height:28,borderRadius:"50%",background:"rgba(232,22,12,0.12)",border:"1px solid rgba(232,22,12,0.25)",display:"flex",alignItems:"center",justifyContent:"center",color:RED,fontSize:11,fontWeight:700,flexShrink:0 }}>{ic}</div>
              <span style={{ fontSize:13, color:"#aaa" }}>{lab}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ padding:"20px 24px 40px", textAlign:"center" }}>
        <button onClick={onAdmin} style={{ background:"none", border:"none", color:"#252525", fontSize:11, cursor:"pointer", letterSpacing:1 }}>Admin Portal</button>
      </div>
    </div>
  );
}

// ── SERVICE LIST ─────────────────────────────────────────────────────────────
function ServiceList({ onBack, onSelect }) {
  const [cat, setCat] = useState("All");
  const list = cat==="All" ? SERVICES : SERVICES.filter(s=>s.category===cat);
  return (
    <div style={bg}>
      <div style={{ ...hdr, background:"#111" }}>
        <button onClick={onBack} style={{ background:"none",border:"none",color:"#666",cursor:"pointer",fontSize:22,padding:0 }}>←</button>
        <img src={LOGO} alt="logo" style={{ width:38,height:38,objectFit:"contain" }}/>
        <h2 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:26, letterSpacing:2, margin:0 }}>Select a Service</h2>
      </div>
      <div style={{ padding:"14px 24px", display:"flex", gap:8, overflowX:"auto", borderBottom:"1px solid #191919" }}>
        {CATS.map(c=><button key={c} onClick={()=>setCat(c)} style={{ background:cat===c?RED:"#191919", color:cat===c?"#fff":"#666", border:"none", padding:"7px 14px", borderRadius:2, fontSize:11, fontWeight:700, letterSpacing:1, textTransform:"uppercase", cursor:"pointer", whiteSpace:"nowrap" }}>{c}</button>)}
      </div>
      <div style={{ padding:"0 24px 48px" }}>
        {list.map(s=>(
          <div key={s.id} onClick={()=>onSelect(s)} style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", padding:"20px 0", borderBottom:"1px solid #191919", cursor:"pointer" }}>
            <div style={{ flex:1, paddingRight:20 }}>
              <div style={{ fontWeight:500, fontSize:15, marginBottom:5 }}>{s.name}</div>
              <div style={{ color:"#555", fontSize:13, lineHeight:1.5, marginBottom:6 }}>{s.desc}</div>
              <div style={{ color:"#444", fontSize:11, textTransform:"uppercase", letterSpacing:1 }}>{s.duration}</div>
            </div>
            <div style={{ textAlign:"right", flexShrink:0 }}>
              <div style={{ color:RED, fontWeight:700, fontSize:18, marginBottom:8 }}>{s.priceLabel}</div>
              <div style={{ border:"1px solid rgba(232,22,12,0.3)", color:RED, fontSize:10, padding:"5px 12px", borderRadius:2, textTransform:"uppercase", letterSpacing:1 }}>Book</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── DATE + TIME ───────────────────────────────────────────────────────────────
function DateTime({ service, onBack, onNext }) {
  const [selDate, setSelDate] = useState(null);
  const [selTime, setSelTime] = useState(null);
  const dates = getDates();
  return (
    <div style={bg}>
      <div style={{ ...hdr, background:"#111" }}>
        <button onClick={onBack} style={{ background:"none",border:"none",color:"#666",cursor:"pointer",fontSize:22,padding:0 }}>←</button>
        <img src={LOGO} alt="logo" style={{ width:38,height:38,objectFit:"contain" }}/>
        <div>
          <h2 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:26, letterSpacing:2, margin:0 }}>Date & Time</h2>
          <p style={{ color:RED, fontSize:12, margin:"3px 0 0" }}>{service.name} · {service.priceLabel}</p>
        </div>
      </div>
      <div style={{ padding:"28px 24px 0" }}>
        <span style={lbl}>Select a Date</span>
        <div style={{ display:"flex", gap:8, overflowX:"auto", paddingBottom:4 }}>
          {dates.map((d,i)=>{ const sel=selDate&&d.toDateString()===selDate.toDateString(); return (
            <button key={i} onClick={()=>{setSelDate(d);setSelTime(null);}} style={{ background:sel?RED:"#161616", color:sel?"#fff":"#aaa", border:sel?"none":"1px solid #1e1e1e", padding:"12px 14px", borderRadius:3, cursor:"pointer", minWidth:58, textAlign:"center", flexShrink:0 }}>
              <div style={{ fontSize:10, fontWeight:700, textTransform:"uppercase", letterSpacing:1 }}>{DAYS[d.getDay()]}</div>
              <div style={{ fontSize:22, fontFamily:"'Bebas Neue',sans-serif", margin:"4px 0 2px" }}>{d.getDate()}</div>
              <div style={{ fontSize:10 }}>{MONTHS[d.getMonth()]}</div>
            </button>
          );})}
        </div>
      </div>
      {selDate && (
        <div style={{ padding:"28px 24px 0" }}>
          <span style={lbl}>Times — {fmtDate(selDate)}</span>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:8 }}>
            {TIME_SLOTS.map(t=>{ const sel=selTime===t; return <button key={t} onClick={()=>setSelTime(t)} style={{ background:sel?RED:"#161616", color:sel?"#fff":"#aaa", border:sel?"none":"1px solid #1e1e1e", padding:"12px 8px", borderRadius:3, cursor:"pointer", fontSize:13, fontWeight:sel?700:400 }}>{t}</button>; })}
          </div>
        </div>
      )}
      <div style={{ padding:"28px 24px 48px" }}>
        <button onClick={()=>selDate&&selTime&&onNext(selDate,selTime)} style={redBtn(!(selDate&&selTime))}>Continue →</button>
      </div>
    </div>
  );
}

// ── PAYMENT FORM ─────────────────────────────────────────────────────────────
function PaymentForm({ service, date, time, onBack, onPaid }) {
  const [stage, setStage]   = useState("contact");
  const [contact, setContact] = useState({ name:"", phone:"", email:"", notes:"" });
  const [card, setCard]     = useState({ number:"", expiry:"", cvv:"", name:"" });
  const [foc, setFoc]       = useState("");
  const setC = (k,v) => setContact(p=>({...p,[k]:v}));
  const setK = (k,v) => setCard(p=>({...p,[k]:v}));
  const contactOk = contact.name.trim() && contact.phone.trim();
  const cardOk    = card.number.replace(/\s/g,"").length===16 && card.expiry.length===5 && card.cvv.length>=3 && card.name.trim();

  const pay = () => {
    if(!cardOk) return;
    setStage("processing");
    setTimeout(()=>{
      onPaid({ id:genId(), service, date:date.toISOString(), time, customer:contact, card:{ last4:card.number.replace(/\s/g,"").slice(-4), name:card.name }, status:"pending", amount:service.price, createdAt:new Date().toISOString(), smsSent:false });
    }, 2000);
  };

  if(stage==="processing") return (
    <div style={{ ...bg, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center" }}>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
      <div style={{ width:56,height:56,borderRadius:"50%",border:`3px solid ${RED}`,borderTopColor:"transparent",animation:"spin 0.8s linear infinite",marginBottom:24 }}/>
      <p style={{ color:RED, fontSize:11, letterSpacing:3, textTransform:"uppercase" }}>Processing Payment...</p>
    </div>
  );

  const SummaryCard = () => (
    <div style={{ margin:"20px 24px", background:"#161616", borderLeft:`3px solid ${RED}`, borderRadius:3, padding:"16px 20px" }}>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
        <div>
          <div style={{ fontWeight:600, fontSize:15, marginBottom:6 }}>{service.name}</div>
          <div style={{ color:"#888", fontSize:13 }}>{fmtDate(date)} · {time}</div>
          <div style={{ color:"#444", fontSize:12, marginTop:3 }}>w/ DeAndre Lindsey · {service.duration}</div>
        </div>
        <div style={{ color:RED, fontWeight:700, fontSize:20 }}>{service.priceLabel}</div>
      </div>
    </div>
  );

  if(stage==="contact") return (
    <div style={bg}>
      <div style={{ ...hdr, background:"#111" }}>
        <button onClick={onBack} style={{ background:"none",border:"none",color:"#666",cursor:"pointer",fontSize:22,padding:0 }}>←</button>
        <img src={LOGO} alt="logo" style={{ width:38,height:38,objectFit:"contain" }}/>
        <h2 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:26, letterSpacing:2, margin:0 }}>Your Info</h2>
      </div>
      <SummaryCard/>
      <div style={{ padding:"8px 24px 48px" }}>
        {[{k:"name",l:"Full Name *",t:"text",p:"First & last name"},{k:"phone",l:"Phone *",t:"tel",p:"(312) 000-0000"},{k:"email",l:"Email",t:"email",p:"you@email.com"},{k:"notes",l:"Notes",t:"text",p:"Anything he should know?"}].map(f=>(
          <div key={f.k} style={{ marginBottom:20 }}>
            <label style={lbl}>{f.l}</label>
            <input type={f.t} placeholder={f.p} value={contact[f.k]}
              onChange={e=>setC(f.k, f.k==="phone"?fmtPhone(e.target.value):e.target.value)}
              style={inp(foc===f.k)} onFocus={()=>setFoc(f.k)} onBlur={()=>setFoc("")}/>
          </div>
        ))}
        <button onClick={()=>contactOk&&setStage("payment")} style={redBtn(!contactOk)}>Continue to Payment →</button>
      </div>
    </div>
  );

  return (
    <div style={bg}>
      <div style={{ ...hdr, background:"#111" }}>
        <button onClick={()=>setStage("contact")} style={{ background:"none",border:"none",color:"#666",cursor:"pointer",fontSize:22,padding:0 }}>←</button>
        <img src={LOGO} alt="logo" style={{ width:38,height:38,objectFit:"contain" }}/>
        <h2 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:26, letterSpacing:2, margin:0 }}>Payment</h2>
      </div>
      <div style={{ padding:"24px" }}>
        {/* Card visual */}
        <div style={{ background:"linear-gradient(135deg,#1a0000,#2d0505)", borderRadius:12, padding:"28px 28px 24px", border:"1px solid rgba(232,22,12,0.2)", marginBottom:24, position:"relative" }}>
          <div style={{ width:38,height:28,background:`linear-gradient(135deg,${RED},#8a0000)`,borderRadius:4,marginBottom:24,opacity:0.9 }}/>
          <div style={{ fontFamily:"'Courier New',monospace", fontSize:17, letterSpacing:4, marginBottom:24, color:card.number?"#f0ece4":"#2e2e2e", minHeight:26 }}>{card.number||"•••• •••• •••• ••••"}</div>
          <div style={{ display:"flex", justifyContent:"space-between" }}>
            <div>
              <div style={{ color:"#3a2020", fontSize:9, letterSpacing:2, textTransform:"uppercase", marginBottom:4 }}>Cardholder</div>
              <div style={{ fontSize:13, color:card.name?"#f0ece4":"#2e2e2e", textTransform:"uppercase", letterSpacing:1 }}>{card.name||"YOUR NAME"}</div>
            </div>
            <div style={{ textAlign:"right" }}>
              <div style={{ color:"#3a2020", fontSize:9, letterSpacing:2, textTransform:"uppercase", marginBottom:4 }}>Expires</div>
              <div style={{ fontSize:13, color:card.expiry?"#f0ece4":"#2e2e2e" }}>{card.expiry||"MM/YY"}</div>
            </div>
          </div>
          <div style={{ position:"absolute", top:24, right:24, background:"rgba(232,22,12,0.15)", border:"1px solid rgba(232,22,12,0.3)", borderRadius:2, padding:"4px 10px", color:RED, fontSize:13, fontWeight:700 }}>{service.priceLabel}</div>
        </div>
        <div style={{ marginBottom:16 }}>
          <label style={lbl}>Card Number</label>
          <input type="text" inputMode="numeric" placeholder="0000 0000 0000 0000" maxLength={19} value={card.number} onChange={e=>setK("number",fmtCard(e.target.value))} style={inp(foc==="cn")} onFocus={()=>setFoc("cn")} onBlur={()=>setFoc("")}/>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginBottom:16 }}>
          <div><label style={lbl}>Expiry</label><input type="text" inputMode="numeric" placeholder="MM/YY" maxLength={5} value={card.expiry} onChange={e=>setK("expiry",fmtExp(e.target.value))} style={inp(foc==="exp")} onFocus={()=>setFoc("exp")} onBlur={()=>setFoc("")}/></div>
          <div><label style={lbl}>CVV</label><input type="text" inputMode="numeric" placeholder="•••" maxLength={4} value={card.cvv} onChange={e=>setK("cvv",e.target.value.replace(/\D/g,"").slice(0,4))} style={inp(foc==="cvv")} onFocus={()=>setFoc("cvv")} onBlur={()=>setFoc("")}/></div>
        </div>
        <div style={{ marginBottom:28 }}>
          <label style={lbl}>Name on Card</label>
          <input type="text" placeholder="As it appears on card" value={card.name} onChange={e=>setK("name",e.target.value.toUpperCase())} style={inp(foc==="cn2")} onFocus={()=>setFoc("cn2")} onBlur={()=>setFoc("")}/>
        </div>
        <button onClick={pay} style={redBtn(!cardOk)}>Pay {service.priceLabel} & Confirm Booking</button>
        <p style={{ color:"#2a2a2a", fontSize:11, textAlign:"center", marginTop:12 }}>🔒 Secured · Replace handler with Stripe.js for live payments</p>
      </div>
    </div>
  );
}

// ── CONFIRMED ─────────────────────────────────────────────────────────────────
function Confirmed({ booking, onReset }) {
  const d = new Date(booking.date);
  return (
    <div style={{ ...bg, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:32, textAlign:"center" }}>
      <img src={LOGO} alt="The Kut Barbershop" style={{ width:140,height:140,objectFit:"contain",display:"block",margin:"0 auto 24px" }}/>
      <p style={{ color:RED, fontSize:10, letterSpacing:4, textTransform:"uppercase", marginBottom:8 }}>Booking Confirmed</p>
      <h1 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:44, margin:"0 0 12px", letterSpacing:2, lineHeight:1 }}>You're On the Books.</h1>
      <p style={{ color:"#aaa", fontSize:16, margin:"0 0 4px" }}>See you soon, {booking.customer.name.split(" ")[0]}.</p>
      <p style={{ color:RED, fontWeight:600, fontSize:16, margin:"0 0 4px" }}>{fmtDate(d)} at {booking.time}</p>
      <p style={{ color:"#555", fontSize:13, margin:"0 0 8px" }}>{booking.service.name} · {booking.service.priceLabel}</p>
      <p style={{ color:"#333", fontSize:12, margin:"0 0 24px" }}>w/ DeAndre Lindsey</p>
      <div style={{ background:"#161616", border:"1px solid #1e1e1e", borderRadius:3, padding:"12px 24px", marginBottom:32, fontSize:12, color:"#444" }}>
        Booking <span style={{ color:RED, fontFamily:"'Courier New',monospace" }}>{booking.id}</span> · Card ••••{booking.card.last4}
      </div>
      <button onClick={onReset} style={{ ...ghostBtn, maxWidth:260 }}>Book Another Appointment</button>
    </div>
  );
}

// ── ADMIN LOGIN ───────────────────────────────────────────────────────────────
function AdminLogin({ onLogin, onBack }) {
  const [pin, setPin] = useState("");
  const [err, setErr] = useState(false);
  const submit = () => { if(pin===ADMIN_PIN) onLogin(); else { setErr(true); setPin(""); setTimeout(()=>setErr(false),1500); } };
  return (
    <div style={{ ...bg, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:32 }}>
      <img src={LOGO} alt="The Kut Barbershop" style={{ width:120,height:120,objectFit:"contain",display:"block",margin:"0 auto 24px" }}/>
      <p style={{ color:RED, fontSize:10, letterSpacing:4, textTransform:"uppercase", marginBottom:8 }}>The Kut Barbershop</p>
      <h2 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:34, letterSpacing:2, margin:"0 0 36px" }}>Admin Portal</h2>
      <div style={{ width:"100%", maxWidth:280 }}>
        <label style={lbl}>PIN</label>
        <input type="password" inputMode="numeric" placeholder="••••" maxLength={4} value={pin}
          onChange={e=>setPin(e.target.value.replace(/\D/g,"").slice(0,4))}
          onKeyDown={e=>e.key==="Enter"&&submit()}
          style={{ ...inp(""), textAlign:"center", fontSize:24, letterSpacing:8, marginBottom:16, border:`1px solid ${err?"rgba(248,113,113,0.5)":"#2a2a2a"}` }} autoFocus/>
        {err && <p style={{ color:"#f87171", fontSize:12, textAlign:"center", marginBottom:12 }}>Incorrect PIN</p>}
        <button onClick={submit} style={{ ...redBtn(pin.length<4), marginBottom:8 }}>Enter</button>
        <button onClick={onBack} style={{ background:"none",border:"none",color:"#444",cursor:"pointer",width:"100%",padding:"12px",fontSize:12 }}>← Back to Booking Site</button>
        <p style={{ color:"#252525", fontSize:11, textAlign:"center", marginTop:8 }}>Default PIN: 2424</p>
      </div>
    </div>
  );
}

// ── SMS MODAL ─────────────────────────────────────────────────────────────────
function SMSModal({ booking, onClose, onSent }) {
  const d = new Date(booking.date);
  const firstName = booking.customer.name.split(" ")[0];
  const msg = `Hi ${firstName}! ✂️ Your appt with The Kut Barbershop is ${booking.status==="confirmed"?"confirmed":"pending"}.\n\n${booking.service.name}\n${fmtDate(d)} at ${booking.time}\nw/ DeAndre Lindsey\n\n3960 S Cottage Grove Ave, Chicago\nReply with questions.\nBooking: ${booking.id}`;
  return (
    <div style={{ padding:"24px", borderBottom:"1px solid #191919" }}>
      <div style={{ background:"#111", border:"1px solid #2a2a2a", borderRadius:8, overflow:"hidden" }}>
        <div style={{ padding:"16px 20px", borderBottom:"1px solid #1e1e1e", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
          <div>
            <div style={{ fontWeight:600, fontSize:14 }}>SMS Preview</div>
            <div style={{ color:"#555", fontSize:12, marginTop:2 }}>To: {booking.customer.phone||booking.customer.name}</div>
          </div>
          <button onClick={onClose} style={{ background:"none",border:"none",color:"#555",cursor:"pointer",fontSize:20,lineHeight:1 }}>×</button>
        </div>
        <div style={{ padding:"16px 20px" }}>
          <div style={{ background:"#0d0d0d", border:"1px solid #1e1e1e", borderRadius:8, padding:"14px 16px", fontSize:12, lineHeight:1.8, color:"#888", whiteSpace:"pre-wrap", marginBottom:16, fontFamily:"'Courier New',monospace" }}>{msg}</div>
          <div style={{ background:"#161616", border:"1px solid rgba(232,22,12,0.12)", borderRadius:4, padding:"12px 16px", marginBottom:16 }}>
            <div style={{ color:"#444", fontSize:10, textTransform:"uppercase", letterSpacing:2, marginBottom:6 }}>Plivo / Twilio Integration</div>
            <div style={{ color:"#555", fontSize:12, lineHeight:1.6 }}>Configure your SMS provider in <span style={{ color:RED }}>Settings</span> to send live messages on booking confirmation.</div>
          </div>
          {booking.smsSent ? <div style={{ textAlign:"center", color:"#4ade80", fontSize:13, padding:"10px" }}>✓ Marked as Sent</div>
            : <button onClick={onSent} style={redBtn(false)}>Mark as Sent</button>}
        </div>
      </div>
    </div>
  );
}

// ── ADMIN DASHBOARD ───────────────────────────────────────────────────────────
function AdminDashboard({ bookings, onUpdate, onLogout }) {
  const [filter, setFilter] = useState("all");
  const [smsId, setSmsId]   = useState(null);
  const [tab, setTab]       = useState("bookings");
  const { cfg, saveCfg }    = useTwilio();
  const [tForm, setTForm]   = useState(cfg);
  useEffect(()=>setTForm(cfg),[cfg]);

  const today   = new Date().toDateString();
  const todayCt = bookings.filter(b=>new Date(b.date).toDateString()===today).length;
  const revenue = bookings.filter(b=>b.status==="completed").reduce((s,b)=>s+b.amount,0);
  const pending = bookings.filter(b=>b.status==="pending").length;
  const filtered = filter==="all" ? bookings : bookings.filter(b=>b.status===filter);
  const smsBk = smsId ? bookings.find(b=>b.id===smsId) : null;

  return (
    <div style={bg}>
      <div style={{ background:"#111", borderBottom:"1px solid #1e1e1e", padding:"20px 24px", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
        <div style={{ display:"flex", alignItems:"center", gap:12 }}>
          <img src={LOGO} alt="logo" style={{ width:48,height:48,objectFit:"contain" }}/>
          <div>
            <p style={{ color:RED, fontSize:9, letterSpacing:3, textTransform:"uppercase", margin:0 }}>Admin Dashboard</p>
            <h2 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:24, letterSpacing:2, margin:0, color:"#f0ece4" }}>The Kut Barbershop</h2>
          </div>
        </div>
        <button onClick={onLogout} style={{ background:"#1e1e1e", border:"1px solid #2a2a2a", color:"#666", padding:"8px 16px", fontSize:10, cursor:"pointer", borderRadius:2, letterSpacing:1, textTransform:"uppercase" }}>Logout</button>
      </div>
      <div style={{ display:"flex", borderBottom:"1px solid #191919" }}>
        {[["bookings","Bookings"],["settings","Settings"]].map(([t,l])=>(
          <button key={t} onClick={()=>setTab(t)} style={{ flex:1, padding:"13px", background:"none", border:"none", borderBottom:tab===t?`2px solid ${RED}`:"2px solid transparent", color:tab===t?RED:"#555", fontSize:11, fontWeight:700, letterSpacing:1, textTransform:"uppercase", cursor:"pointer" }}>{l}</button>
        ))}
      </div>

      {tab==="bookings" && <>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:1, background:"#191919", borderBottom:"1px solid #191919" }}>
          {[["$"+revenue.toLocaleString(),"Revenue"],[todayCt.toString(),"Today"],[pending.toString(),"Pending"],[bookings.length.toString(),"Total"]].map(([v,l])=>(
            <div key={l} style={{ background:DARK, padding:"20px 24px" }}>
              <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:32, color:RED, lineHeight:1 }}>{v}</div>
              <div style={{ color:"#444", fontSize:10, textTransform:"uppercase", letterSpacing:2, marginTop:4 }}>{l}</div>
            </div>
          ))}
        </div>
        <div style={{ padding:"14px 24px", display:"flex", gap:8, overflowX:"auto", borderBottom:"1px solid #191919" }}>
          {["all","pending","confirmed","completed","cancelled"].map(f=>(
            <button key={f} onClick={()=>setFilter(f)} style={{ background:filter===f?RED:"#191919", color:filter===f?"#fff":"#666", border:"none", padding:"6px 14px", borderRadius:2, fontSize:10, fontWeight:700, letterSpacing:1, textTransform:"uppercase", cursor:"pointer", whiteSpace:"nowrap" }}>
              {f==="all"?`All (${bookings.length})`:`${f} (${bookings.filter(b=>b.status===f).length})`}
            </button>
          ))}
        </div>
        {smsBk && <SMSModal booking={smsBk} onClose={()=>setSmsId(null)} onSent={()=>{ onUpdate(smsBk.id,{smsSent:true}); setSmsId(null); }}/>}
        <div style={{ paddingBottom:48 }}>
          {filtered.length===0 && (
            <div style={{ textAlign:"center", padding:"48px 24px", color:"#282828" }}>
              <p style={{ fontSize:32, margin:"0 0 12px" }}>✂</p>
              <p style={{ fontSize:13 }}>No bookings yet</p>
            </div>
          )}
          {filtered.map(b=>{ const d=new Date(b.date); return (
            <div key={b.id} style={{ padding:"20px 24px", borderBottom:"1px solid #191919" }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:10 }}>
                <div>
                  <div style={{ fontWeight:600, fontSize:15, marginBottom:4 }}>{b.customer.name}</div>
                  <div style={{ color:"#666", fontSize:12, marginBottom:2 }}>{b.service.name}</div>
                  <div style={{ color:"#444", fontSize:12 }}>{fmtDate(d)} · {b.time}</div>
                  {b.customer.phone && <div style={{ color:"#444", fontSize:11, marginTop:2 }}>{b.customer.phone}</div>}
                </div>
                <div style={{ textAlign:"right" }}>
                  <div style={{ color:RED, fontWeight:700, fontSize:16, marginBottom:8 }}>${b.amount}</div>
                  <Badge status={b.status}/>
                </div>
              </div>
              <div style={{ color:"#2a2a2a", fontSize:10, fontFamily:"'Courier New',monospace", marginBottom:12 }}>{b.id}</div>
              <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
                {b.status==="pending" && <button onClick={()=>onUpdate(b.id,{status:"confirmed"})} style={{ background:"rgba(96,165,250,0.1)", border:"1px solid rgba(96,165,250,0.3)", color:"#60a5fa", padding:"6px 14px", fontSize:10, fontWeight:700, letterSpacing:1, textTransform:"uppercase", cursor:"pointer", borderRadius:2 }}>Confirm</button>}
                {(b.status==="pending"||b.status==="confirmed") && <button onClick={()=>onUpdate(b.id,{status:"completed"})} style={{ background:"rgba(74,222,128,0.1)", border:"1px solid rgba(74,222,128,0.3)", color:"#4ade80", padding:"6px 14px", fontSize:10, fontWeight:700, letterSpacing:1, textTransform:"uppercase", cursor:"pointer", borderRadius:2 }}>Complete</button>}
                {b.status!=="cancelled"&&b.status!=="completed" && <button onClick={()=>onUpdate(b.id,{status:"cancelled"})} style={{ background:"rgba(248,113,113,0.1)", border:"1px solid rgba(248,113,113,0.3)", color:"#f87171", padding:"6px 14px", fontSize:10, fontWeight:700, letterSpacing:1, textTransform:"uppercase", cursor:"pointer", borderRadius:2 }}>Cancel</button>}
                <button onClick={()=>setSmsId(smsId===b.id?null:b.id)} style={{ background:b.smsSent?"rgba(232,22,12,0.04)":"rgba(232,22,12,0.1)", border:`1px solid rgba(232,22,12,${b.smsSent?"0.1":"0.3"})`, color:b.smsSent?"#444":RED, padding:"6px 14px", fontSize:10, fontWeight:700, letterSpacing:1, textTransform:"uppercase", cursor:"pointer", borderRadius:2 }}>
                  {b.smsSent?"SMS ✓":"Send SMS"}
                </button>
              </div>
            </div>
          );})}
        </div>
      </>}

      {tab==="settings" && (
        <div style={{ padding:"28px 24px 48px" }}>
          <span style={lbl}>SMS Configuration (Plivo / Twilio)</span>
          <div style={{ background:"#161616", border:"1px solid rgba(232,22,12,0.12)", borderRadius:4, padding:"14px 16px", marginBottom:24, fontSize:13, color:"#555", lineHeight:1.7 }}>
            Connect <span style={{ color:RED }}>Plivo</span> (recommended) or Twilio to send automated appointment confirmations.
          </div>
          {[{k:"sid",l:"Account SID / Auth ID",t:"text",p:"AC•••• or your Plivo Auth ID"},{k:"token",l:"Auth Token",t:"password",p:"••••••••••••••••"},{k:"from",l:"From Number",t:"text",p:"+1 (312) 000-0000"}].map(f=>(
            <div key={f.k} style={{ marginBottom:20 }}>
              <label style={lbl}>{f.l}</label>
              <input type={f.t} placeholder={f.p} value={tForm[f.k]} onChange={e=>setTForm(p=>({...p,[f.k]:e.target.value}))} style={inp(false)}/>
            </div>
          ))}
          <button onClick={()=>saveCfg(tForm)} style={{ ...redBtn(false), marginBottom:32 }}>Save Configuration</button>
          <div style={{ background:"#111", border:"1px solid #1e1e1e", borderRadius:4, padding:"16px 20px" }}>
            <div style={{ color:"#555", fontSize:10, textTransform:"uppercase", letterSpacing:2, marginBottom:12 }}>Plivo Endpoint</div>
            <code style={{ display:"block", color:RED, fontSize:11, fontFamily:"'Courier New',monospace", lineHeight:1.8, wordBreak:"break-all" }}>
              POST https://api.plivo.com/v1/Account/<br/>[AUTH_ID]/Message/<br/><br/>
              src=[from]&dst=[phone]&text=[msg]
            </code>
            <div style={{ color:"#333", fontSize:12, marginTop:12, lineHeight:1.6 }}>Fire from your n8n workflow when status → confirmed.</div>
          </div>
        </div>
      )}
    </div>
  );
}

// ── ROOT ─────────────────────────────────────────────────────────────────────
export default function App() {
  const [mode, setMode]   = useState("customer");
  const [step, setStep]   = useState("landing");
  const [service, setSvc] = useState(null);
  const [date, setDate]   = useState(null);
  const [time, setTime]   = useState(null);
  const [confirmed, setCfm] = useState(null);
  const { bookings, addBooking, updateBooking } = useBookings();

  useEffect(()=>{
    const l=document.createElement("link");
    l.href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@400;500;600;700&display=swap";
    l.rel="stylesheet"; document.head.appendChild(l);
  },[]);

  const reset = () => { setStep("landing"); setSvc(null); setDate(null); setTime(null); setCfm(null); };

  if(mode==="admin_login") return <AdminLogin onLogin={()=>setMode("admin")} onBack={()=>setMode("customer")}/>;
  if(mode==="admin")       return <AdminDashboard bookings={bookings} onUpdate={updateBooking} onLogout={()=>setMode("customer")}/>;
  if(confirmed) return <Confirmed booking={confirmed} onReset={reset}/>;
  if(step==="payment") return <PaymentForm service={service} date={date} time={time} onBack={()=>setStep("datetime")} onPaid={async b=>{
          await addBooking(b);
          // Fire n8n webhook for SMS + Airtable
          try {
            await fetch("https://ldillon.app.n8n.cloud/webhook/thekut-booking", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(b)
            });
          } catch(e) { console.log("Webhook error:", e); }
          setCfm(b);
        }}/>;
  if(step==="datetime") return <DateTime service={service} onBack={()=>setStep("services")} onNext={(d,t)=>{setDate(d);setTime(t);setStep("payment");}}/>;
  if(step==="services") return <ServiceList onBack={()=>setStep("landing")} onSelect={s=>{setSvc(s);setStep("datetime");}}/>;
  return <Landing onBook={()=>setStep("services")} onQuick={s=>{setSvc(s);setStep("datetime");}} onAdmin={()=>setMode("admin_login")}/>;
}
