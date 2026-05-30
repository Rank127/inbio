import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import matplotlib.patches as mpatches
import os

OUT = 'C:/Users/UnMutedMinds/Pictures/wefunder3'

# 1. USE OF FUNDS PIE CHART
fig, ax = plt.subplots(figsize=(8, 6))
fig.patch.set_facecolor('#1B5E20')
labels = ['Repay Bank Note\n$1.4M', 'Complete 6 TPD\nDemo Plant\n$1.1M', 'Commissioning &\nFirst Production\n$250K', 'Working\nCapital\n$250K']
sizes = [1400000, 1100000, 250000, 250000]
colors = ['#F57C00', '#FF9800', '#FFB74D', '#FFE0B2']
wedges, texts, autotexts = ax.pie(sizes, labels=labels, colors=colors,
    autopct='%1.0f%%', startangle=90, textprops={'fontsize': 11, 'color': 'white'},
    pctdistance=0.75)
for t in autotexts:
    t.set_fontweight('bold')
    t.set_fontsize(13)
ax.set_title('Use of Funds - $3M Convertible Note', fontsize=18, fontweight='bold', color='white', pad=20)
plt.tight_layout()
plt.savefig(f'{OUT}/chart-use-of-funds.png', dpi=150, facecolor='#1B5E20', bbox_inches='tight')
plt.close()
print('1. Use of funds pie chart saved')

# 2. REVENUE STREAMS DIAGRAM
fig, ax = plt.subplots(figsize=(10, 5))
fig.patch.set_facecolor('white')
ax.set_xlim(0, 10)
ax.set_ylim(0, 6)
ax.axis('off')
ax.text(5, 5.5, '3 Revenue Streams + Carbon Credits', fontsize=20, fontweight='bold', ha='center', color='#1B5E20')
center = mpatches.FancyBboxPatch((3.5, 2.8), 3, 1.4, boxstyle='round,pad=0.15', facecolor='#1B5E20', edgecolor='none')
ax.add_patch(center)
ax.text(5, 3.7, 'Fast Pyrolysis', fontsize=13, fontweight='bold', ha='center', color='white')
ax.text(5, 3.3, 'Reactor', fontsize=11, ha='center', color='#A5D6A7')
ax.annotate('', xy=(3.5, 3.5), xytext=(1.5, 3.5), arrowprops=dict(arrowstyle='->', color='#616161', lw=2))
ax.text(1.4, 3.5, 'Biomass\nWaste', fontsize=10, ha='right', va='center', color='#616161')
boxes = [
    (0.5, 0.3, 'Bio-Oil Sales', '$40.8M/yr at scale', '#F57C00'),
    (3.5, 0.3, 'Biochar Sales', '$6.9M/yr at scale', '#2E7D32'),
    (6.5, 0.3, 'Carbon Credits', '$3.0M/yr at scale', '#1565C0'),
]
for x, y, title, subtitle, color in boxes:
    box = mpatches.FancyBboxPatch((x, y), 2.8, 1.6, boxstyle='round,pad=0.15', facecolor=color, edgecolor='none', alpha=0.9)
    ax.add_patch(box)
    ax.text(x+1.4, 1.4, title, fontsize=11, fontweight='bold', ha='center', color='white')
    ax.text(x+1.4, 0.9, subtitle, fontsize=9, ha='center', color='white', alpha=0.9)
for x in [1.9, 4.9, 7.9]:
    ax.annotate('', xy=(x, 1.9), xytext=(5, 2.8), arrowprops=dict(arrowstyle='->', color='#9E9E9E', lw=1.5))
ax.text(8.5, 3.8, 'Syngas\n(powers reactor)', fontsize=9, ha='left', va='center', color='#9E9E9E')
plt.tight_layout()
plt.savefig(f'{OUT}/chart-revenue-streams.png', dpi=150, facecolor='white', bbox_inches='tight')
plt.close()
print('2. Revenue streams diagram saved')

# 3. SCALE-UP TIMELINE
fig, ax = plt.subplots(figsize=(10, 4))
fig.patch.set_facecolor('white')
ax.set_xlim(0, 10)
ax.set_ylim(0, 4)
ax.axis('off')
ax.text(5, 3.7, 'Scale-Up Pathway', fontsize=18, fontweight='bold', ha='center', color='#1B5E20')
phases = [
    (1, '2026-2027', '6 TPD Demo', 'Under construction\n$3M round funds this', '#FF9800'),
    (4, '2028', '75 TPD', 'Reactor designed via\nENERGYWERX grant', '#F57C00'),
    (7, '2029-2030', '300 TPD', '4 x 75 TPD parallel\n$60.9M revenue/yr', '#E65100'),
]
for x, year, title, desc, color in phases:
    box = mpatches.FancyBboxPatch((x-0.8, 0.8), 2.6, 2.2, boxstyle='round,pad=0.15', facecolor=color, edgecolor='none')
    ax.add_patch(box)
    ax.text(x+0.5, 2.5, title, fontsize=14, fontweight='bold', ha='center', color='white')
    ax.text(x+0.5, 1.8, desc, fontsize=9, ha='center', color='white', alpha=0.9)
    ax.text(x+0.5, 0.5, year, fontsize=10, fontweight='bold', ha='center', color='#616161')
ax.annotate('', xy=(3.2, 1.9), xytext=(2.8, 1.9), arrowprops=dict(arrowstyle='->', color='#1B5E20', lw=2.5))
ax.annotate('', xy=(6.2, 1.9), xytext=(5.8, 1.9), arrowprops=dict(arrowstyle='->', color='#1B5E20', lw=2.5))
plt.tight_layout()
plt.savefig(f'{OUT}/chart-scaleup-timeline.png', dpi=150, facecolor='white', bbox_inches='tight')
plt.close()
print('3. Scale-up timeline saved')

# 4. MARKET OPPORTUNITY BAR CHART
fig, ax = plt.subplots(figsize=(8, 5))
fig.patch.set_facecolor('white')
categories = ['Biochar\n2026', 'Biochar\n2030', 'Carbon\nCredits\n2030', 'SAF\n2035']
values = [0.97, 3.1, 1.35, 84]
colors_bar = ['#2E7D32', '#1B5E20', '#1565C0', '#F57C00']
bars = ax.bar(categories, values, color=colors_bar, width=0.6, edgecolor='none')
for bar, val in zip(bars, values):
    ax.text(bar.get_x() + bar.get_width()/2, bar.get_height() + 1.5,
        f'${val}B', ha='center', fontsize=13, fontweight='bold', color='#212121')
ax.set_ylabel('Market Size (Billions USD)', fontsize=12, color='#616161')
ax.set_title('Addressable Market Opportunity', fontsize=18, fontweight='bold', color='#1B5E20', pad=15)
ax.set_ylim(0, 100)
ax.spines['top'].set_visible(False)
ax.spines['right'].set_visible(False)
ax.spines['left'].set_color('#E0E0E0')
ax.spines['bottom'].set_color('#E0E0E0')
ax.tick_params(colors='#616161')
plt.tight_layout()
plt.savefig(f'{OUT}/chart-market-opportunity.png', dpi=150, facecolor='white', bbox_inches='tight')
plt.close()
print('4. Market opportunity chart saved')

# 5. KEY METRICS BANNER
fig, ax = plt.subplots(figsize=(10, 3))
fig.patch.set_facecolor('#1B5E20')
ax.set_xlim(0, 10)
ax.set_ylim(0, 3)
ax.axis('off')
metrics = [
    (1.25, '$970M', 'Biochar Market 2026'),
    (3.75, '$164/ton', 'Carbon Credit Avg'),
    (6.25, '62%', 'Supply Pre-Sold'),
    (8.75, '13%', 'Annual Growth'),
]
for x, value, label in metrics:
    ax.text(x, 1.9, value, fontsize=22, fontweight='bold', ha='center', color='#FF9800')
    ax.text(x, 1.1, label, fontsize=10, ha='center', color='white', alpha=0.85)
for x in [2.5, 5.0, 7.5]:
    ax.plot([x, x], [0.8, 2.4], color='white', alpha=0.2, lw=1)
plt.tight_layout()
plt.savefig(f'{OUT}/chart-key-metrics.png', dpi=150, facecolor='#1B5E20', bbox_inches='tight')
plt.close()
print('5. Key metrics graphic saved')

print(f'\nAll 5 graphics saved to {OUT}/')
